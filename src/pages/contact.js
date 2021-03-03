import React from 'react';
import { FormGroup, Form, Button } from 'react-bootstrap';
import { navigate } from 'gatsby';
import PrimaryLayout from "../components/layouts/PrimaryLayout";


export const Contact = ({ data }) => {

   let seo = data.wpPage;

   console.log(seo)
   return <PrimaryLayout title={seo.title} description={seo.seo.metaDesc}>
      <div className="container">
         <div className="row justify-content-md-center">
            <div className="col-md-10 ">
               <h1 className="text-center">Contact Page</h1>
               <div className="row justify-content-md-center">
                  <Form className="col-md-8">
                     <Form.Group controlId="controlForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                     </Form.Group>
                     <Form.Group controlId="controlForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                     </Form.Group>
                     <FormGroup controlId="controlForm.ControlButton">
                        <Button>Submit</Button>
                     </FormGroup>
                  </Form>
               </div>
            </div>
         </div>
      </div>

   </PrimaryLayout>
}
export default Contact

export const query = graphql`
query MyPage {
   wpPage(slug: {eq: "contact"}) {
      seo {
        breadcrumbs {
          text
          url
        }
        canonical
        cornerstone
        focuskw
        metaDesc
        metaKeywords
        metaRobotsNofollow
        metaRobotsNoindex
        opengraphAuthor
        opengraphDescription
        opengraphImage {
          sourceUrl
        }
      }
      title
      slug
    }
}

`
