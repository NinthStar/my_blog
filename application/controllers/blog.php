<?php

class Blog extends CI_Controller 
{
    public function __construct()
    {
        parent :: __construct();
        $this->load->model("blog_model");
    }

    public function index()
    {
        $tmp = $this->blog_model->get_essays();

        $data['heading'] = 'heading';
        $data['title'] = 'title';
        $data['query'] = $tmp['query'];

        $this->load->view('templates/header',$data);
        $this->load->view('blog/index',$data);
        //echo $data['page_link'];
        $this->load->view('templates/footer');

    }  


    public function page($page = 0)
    {
        $this->load->library("pagination");

        if (! is_numeric($page)) $page = 0;

        $tmp = $this->blog_model->get_lists($page);

        $config['base_url'] = 'http://localhost/slug/index.php/blog/page/';
        $config['total_rows'] = $tmp['total_rows'];
        $config['per_page'] = 5;

        $this->pagination->initialize($config);

        $data['heading'] = 'heading';
        $data['title'] = 'title';
        $data['query'] = $tmp['query'];
        $data['page_link'] = $this->pagination->create_links();


        $this->load->view('templates/header',$data);
        $this->load->view('blog/page',$data);
        $this->load->view('templates/footer');

        
    } 

    public function view($slug)
    {
        $data['item'] = $this->blog_model->get_essays($slug);

        if (empty($data['item']))
        {
            show_404();
        }

        $data['title'] = $data['item']['title'];
        $data['heading'] = $data['item']['title'];

        $this->load->view('templates/header',$data);
        $this->load->view('blog/view',$data);
        $this->load->view('templates/footer');

    }

    public function create()
    {
        $this->load->library('form_validation');
        $this->load->helper(array('form','url'));

        $data['title'] = 'create';
        $data['heading'] = 'new contents';

        $this->form_validation->set_rules('title','Title','trim|required|xss_clean');
        $this->form_validation->set_rules('body','content','trim|required|xss_clean');

        if ($this->form_validation->run() == FALSE)
        {
            $this->load->view('templates/header',$data);
            $this->load->view('blog/create_main',$data);
            $this->load->view('templates/footer');
        }
        else
        {
            $this->blog_model->create_blog();
            $this->load->view('blog/create_success');
        }
    }


}

