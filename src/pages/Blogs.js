import React from 'react'
import '../styles/Blogs.css'
import Blog1 from '../assets/images/blog-1.jpg'
import Blog2 from '../assets/images/blog-2.jpg'
import Blog3 from '../assets/images/blog-3.jpg'
import Blog4 from '../assets/images/blog-4.jpg'
import Blog5 from '../assets/images/blog-5.jpg'
import Blog6 from '../assets/images/blog-6.jpg'

function Blogs() {
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Blogs</title>
        <section id="blog">
          <div className="blog-heading">
            <span>Recent Posts</span>
            <h3>Blogs</h3>
          </div>
          <div className="blog-container">
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog1 } alt="" />
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 1</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog2 } alt="" />  
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 2</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog3 } alt="" />
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 3</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog4 } alt="" />
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 4</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog5 } alt="" />
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 5</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <img src={ Blog6 } alt="" />
              </div>
              <div className="blog-text">
                <span>1st April 2021/Blogs</span>
                <a href="#" className="blog-title">Blog 6</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis amet nemo mollitia cumque quas consequatur dicta fugiat repellendus natus!</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Blogs