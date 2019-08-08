<?php

/**
 * Class BookModel
 * @property CI_DB_query_builder db
 */
class BookModel extends CI_Model
{
    private $book_tbl = 'books';
    private $author_tbl = 'authors';
    private $author_relate_tbl = 'authors_relate_books';

    public function __construct()
    {
        // Call the CI_Model constructor
        parent::__construct();
    }

    /**
     * Selected goo by filters
     * @param int $countAuthor
     * @param string $search
     * @return array
     */
    public function searchBookFullText($countAuthor = 1, $search = "")
    {
        $booksIds = [];
        $authorIds = [];

        // select author name
        if (!empty(trim($search))) {
            $sql = "SELECT id FROM ".$this->author_tbl." WHERE MATCH (name) AGAINST (?)";
            $resultAuthor = $this->db->query($sql, [$search])->result_array();
            $authorIds = array_map(function ($relateItem) {
                return $relateItem['id'];
            }, $resultAuthor);
        }

        // select author count
        if ($countAuthor > 1) {
            $this->db->select('count(author_id), book_id');
            $this->db->from($this->author_relate_tbl);
            $this->db->group_by('book_id');
            if (count($authorIds) > 0) {
                $this->db->where_in('author_id', $authorIds);
            }
            $this->db->having('count(author_id)', $countAuthor, false);
            $resultRelateAuthorToBooks = $this->db->get()->result_array();
            $booksIds = array_map(function ($relateItem) {
                return $relateItem['book_id'];
            }, $resultRelateAuthorToBooks);
        }else if (count($authorIds) > 0){
            $this->db->select('book_id');
            $this->db->from($this->author_relate_tbl);
            $this->db->group_by('book_id');
            $this->db->where_in('author_id', $authorIds);
            $resultRelateAuthorToBooks = $this->db->get()->result_array();
            $booksIds = array_map(function ($relateItem) {
                return $relateItem['book_id'];
            }, $resultRelateAuthorToBooks);
        }

        // select books
        if (trim($search) != ""){
            $sql = "SELECT * FROM ".$this->book_tbl." WHERE MATCH (name) AGAINST (?)";
            if(count($booksIds) > 0)
                $sql .= " OR id IN (".implode(',', $booksIds).")";
            return $this->db->query($sql, [$search])->result_array();
        }else {
            if(count($booksIds) > 0)
                $this->db->or_where_in('id', $booksIds);
            return $this->db->get($this->book_tbl)->result_array();
        }
    }

    /**
     * Get All Name Authors
     * @return array
     */
    public function getNameAuthors()
    {
        return array_map(function ($item){
            return $item['name'];
        }, $this->db->get($this->author_tbl)->result_array());
    }
}
