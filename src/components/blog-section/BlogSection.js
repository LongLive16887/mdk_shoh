import "./blogSection.scss"
import { Container, Row, Col } from 'react-bootstrap';

const BlogSection = () => {
    return(
        <section className="blog-section latest-blog spad">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="section-title">
                    <span>Latest Blog</span>
                    <h2>From Our Blog</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                {blogPosts.map(post => (
                  <Col md={6} key={post.id}>
                    <div className="blog-item">
                      <Row>
                        <Col lg={6}>
                          <div className="bi-pic set-bg" style={{ backgroundImage: `url(${post.imgSrc})` }}></div>
                        </Col>
                        <Col lg={6}>
                          <div className="bi-text">
                            <ul>
                              <li><img src={"https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/calendar.svg"} alt={"smth"} height="16" width="16"/> {post.date}</li>
                              <li><img src={"https://unpkg.com/@icon/themify-icons@1.0.1-alpha.3/icons/comment.svg"} alt={"smth"} height="16" width="16"/> {post.comments}</li>
                            </ul>
                            <h4><a href="/">{post.title}</a></h4>
                            <p>{post.excerpt}</p>
                            <div className="bt-author">
                              <div className="ba-pic">
                                <img src={post.author.avatar} alt="Author" />
                              </div>
                              <div className="ba-text">
                                <h5>{post.author.name}</h5>
                                <span>{post.author.role}</span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
    )
}

const blogPosts = [
    {
      id: 1,
      imgSrc: 'https://mdk.pw/img/blog/blog-1.jpg',
      date: 'August 9, 2019',
      comments: 0,
      title: 'Every Single Way You Can Wear Pastel Makeup This Spring',
      excerpt: 'Never ever think of giving up. Winners never quit and',
      author: {
        name: 'Jeff Rodriguez',
        role: 'Designer',
        avatar: 'https://mdk.pw/img/blog/author-1.jpg'
      }
    },
    {
      id: 2,
      imgSrc: 'https://mdk.pw/img/blog/blog-2.jpg',
      date: 'August 9, 2019',
      comments: 0,
      title: 'Everything Coming to Netflix Canada in May 2019',
      excerpt: 'Never ever think of giving up. Winners never quit and',
      author: {
        name: 'Aaron Russell',
        role: 'Content',
        avatar: 'https://mdk.pw/img/blog/author-1.jpg'
      }
    }
  ];
    


export default BlogSection;
