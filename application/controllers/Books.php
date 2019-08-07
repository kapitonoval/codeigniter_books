<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Class Books
 * @property BookModel BookModel
 * @property CI_Input $input
 */
class Books extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();

    }

    public function index()
    {
        $this->load->model('BookModel');

        $data = $this->input->get();

        $title = $data['title'] ?? '';
        $authorName = $data['author_name'] ?? '';
        $authorCount = (int)($data['author_count'] ?? 1);

        $viewData['feedDataBooks'] = $this->BookModel->getBook($authorCount, $authorName, $title);

        $this->load->view('main', $viewData);
    }

}
