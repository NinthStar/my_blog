<?

class Blog_model extends CI_Model
{
    public function __construct()
    {
        $this->load->database();
    }


    public function get_essays($slug = FALSE)
    {
        if ($slug === FALSE)
        {
            $query = $this->db->get('blog_essays');


            $result['total_rows'] = $query->num_rows();
            $result['query'] = $query->result_array();
            return $result;
        }

        $query = $this->db->get_where('blog_essays',array('slug'=>$slug));
        return $query->row_array();
    }

    public function get_lists($page)
    {
        $begin = $page;
        $end = 5;
        $query = $this->db->query("SELECT * FROM blog_essays LIMIT {$begin},{$end}");

        $result['query'] = $query->result_array();

        $query = $this->db->get("blog_essays");
        $result['total_rows'] = $query->num_rows();

        return $result;

        
    }


    public function create_blog()
    {
        $slug = url_title($this->input->post('title'),'dash',TRUE);

        $data = array(
            'title' => $this->input->post('title'),
            'body'  => $this->input->post('body'),
            'slug'  => $slug,
            'uid'   => 1,
            'date'  => date("Y-m-d")
        );

        return $this->db->insert('blog_essays',$data);
    } 
}

