<?php

/**
 * Class BookModel
 * @property CI_DB_query_builder db
 */
class BookModel extends CI_Model
{
    private $book_tbl = 'books';
    private $author_tbl = 'author';
    private $author_relate_tbl = 'books_relate_author';

    public function __construct()
    {
        // Call the CI_Model constructor
        parent::__construct();
    }

    public function get_last_ten_entries()
    {
        $query = $this->db->get('entries', 10);
        return $query->result();
    }

    public function getBook($countAuthor = 1, $authorName = "", $titleBook = "")
    {
        $booksIds = [];
        $authorIds = [];

        // select author name
        if(!empty(trim($authorName))){
            $this->db->select('id');
            $this->db->like('name',$authorName);
            $resultAuthor = $this->db->get('author')->result_array();
            $authorIds = array_map(function ($relateItem) {
                return $relateItem['id'];
            }, $resultAuthor);
        }

        // select author count
        if ($countAuthor > 1) {
            $this->db->select('count(author_id), books_id');
            $this->db->from('books_relate_author');
            $this->db->group_by('books_id');
            if(count($authorIds)>0) $this->db->where_in('author_id',$authorIds);
            $this->db->having('count(author_id)', $countAuthor, false);
            $resultRelateAuthorToBooks = $this->db->get()->result_array();
            $booksIds = array_map(function ($relateItem) {
                return $relateItem['books_id'];
            }, $resultRelateAuthorToBooks);
        }

        // select books
        $this->db->select('*');
        if(trim($titleBook)!=""){
            $this->db->like('name',$titleBook);
        }

        if(count($booksIds)>0){
            $this->db->where_in('id', $booksIds);
        }

        return $this->db->get($this->book_tbl)->result_array();
    }
}
