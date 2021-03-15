import React, { useState } from "react";
import { graphql } from "gatsby";
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import { Modal } from "../components/layouts/Modal"
import { PlayBtnT } from "../components/layouts/PlayBtn";
import Lightbox from 'react-image-lightbox';
import Post from "../components/Post";
import { Row } from 'react-bootstrap';
import 'react-image-lightbox/style.css';
import SEO from "../components/SEO";
import poster from "../../static/980583bb781c4cc5e3dfdcebbcb393e0.png"
import poster_2 from "../../static/23d8e5fcbec3db55ddae3357ab8644d5.png"
import playBtn from "../../static/play-button.svg"
import decier from "../../static/decor-ieroglif.png"
import ContactForm from "../components/ContactForm"






const Home = ({ data }) => { //можно так а можно добавить пропс и извлечь все внутри компонента
  // let seo = data.wpPage;


  const bgFunction = (url) => {
    let mainBackground = {
      backgroundImage: `url(${url})`
    }
    return mainBackground;
  }



  const [show, setState] = useState(false);
  const [id, setId] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setIndex] = useState(0);

  let showModal = () => {
    setState(true);
  }
  let hideModal = () => {
    setState(false);
  }

  const imagesMap = data.wpPage.acField.gallery.map((node, key) => {
    return <img className="grid-item" onClick={() => {
      setOpen(true)
      setIndex(key)
    }} key={key} src={node.sourceUrl} alt="gallery-img" loading="lazy" />
  })

  // const Lazymages = lazy(() => { import (imagesMap })

  const images = data.wpPage.acField.gallery.map((node) => {
    return node.sourceUrl
  })

  const postData = data.allWpPost.nodes.map((node, index) => {

    return <Post p="10" key={index} video={node.PostField.postVideo} image={node.featuredImage.node.sourceUrl ? node.featuredImage.node.sourceUrl :
      ""} title={node.title} date={node.date} slug={node.slug} excerpt={node.excerpt} />
  })


  return (<PrimaryLayout >
    <SEO />
    <section className="container main-container row" style={bgFunction(data.wpPage.acField.mainImage.sourceUrl)}>
      <div className="mine-title-wrap text-center col justify-content-center align-self-center">
        <h1 className="main-title">{data.wpPage.acField.mineTitle}</h1>
        <p className="main-subtitle">{data.wpPage.acField.subtitle}</p>
      </div>
    </section>
    <section className="container-fluid video-section">
      <div className="title-wrap pt-6 text-center ">
        <div className="headline-title">
          {data.wpPage.acField.sectionTitle}
        </div>
        <div className="description col-xl-5 col-lg-7 m-auto" dangerouslySetInnerHTML={{ __html: data.wpPage.acField.sectionDescription }} />
      </div>



      <div className="video-wrap d-flex justify-content-center">


        <div className="video-left-wrap descktop-block  d-flex justify-content-end">
          <div className="video-text">
            <div className="left-video-title">{data.wpPage.acField.videotitle}</div>
            <div className="d-flex align-items-center justify-content-between">
              <PlayBtnT func={"kk"} ></PlayBtnT>
              <div className="decor-horisontal"></div>
            </div>

            <div className="description left-video-description" dangerouslySetInnerHTML={{ __html: data.wpPage.acField.videodescription }}></div>

          </div>
          <div className="video-img d-flex align-items-center">
            <img className="play-btn" onClick={() => {
              showModal()
              setId(1)
            }} data-video="1" src={playBtn} alt="play button" loading="lazy" ></img>
            <img className="img-fluid" src={poster} alt="poster" loading="lazy" />
          </div>
        </div>

        <div className="video-left-wrap mobile-block d-flex justify-content-end " style={bgFunction(decier)}>
          <div className="video-text">
            <div className="left-video-title">{data.wpPage.acField.videotitle}</div>
            <div className="video-img d-flex align-items-center">
              <img className="play-btn" onClick={() => {
                showModal()
                setId(1)
              }} data-video="1" src={playBtn} alt="play button" loading="lazy" ></img>
              <img className="img-fluid" src={poster} alt="poster" loading="lazy" />
            </div>
            <div className="description left-video-description" dangerouslySetInnerHTML={{ __html: data.wpPage.acField.videodescription }}></div>

          </div>

        </div>













        <div className="video-right-wrap d-flex">
          <div className="video-text">
            <div className="left-video-title" dangerouslySetInnerHTML={{ __html: data.wpPage.acField.secondVideoTitle }}></div>
            <PlayBtnT func={"kk"} ></PlayBtnT>
            <div className="decor"></div>
          </div>
          <div className="video-img right-video-image">
            <img className="play-btn" onClick={() => {
              showModal()
              setId(2)
            }} data-video="1" src={playBtn} alt="play btn" loading="lazy" ></img>
            <img className="right-video-preview img-fluid" src={poster_2} alt="poster" loading="lazy" />
          </div>
          <div className="description right-video-description" dangerouslySetInnerHTML={{ __html: data.wpPage.acField.secondVideoDescription }}></div>
        </div>

      </div>



    </section>
    <section className="container-fluid gen-section">
      <div className="generation-wrap d-flex justify-content-between">


        <div className="gen-img left-img">
          <img className="img-fluid" src={data.wpPage.acField.leftImg.sourceUrl} alt="engiene" loading="lazy" ></img>
        </div>

        <div className="gen-title-wrap text-center">
          <p className="gen-title " dangerouslySetInnerHTML={{ __html: data.wpPage.acField.generationTitle }}></p>
          <p className="gen-subtitle" dangerouslySetInnerHTML={{ __html: data.wpPage.acField.generationSubtitle }}></p>
          <div className="d-flex justify-content-center">
            <PlayBtnT func={"kk"} ></PlayBtnT>
          </div>

        </div>

        <div className="gen-img right-img">
          <img className="img-fluid" src={data.wpPage.acField.rightImg.sourceUrl} alt="Author" loading="lazy" ></img>
        </div>
      </div>
    </section>
    <section className="gallery container-fluid">
      <div className="gallery-title text-center">
        {data.wpPage.acField.galleryTitle}
      </div>
      <div className="gallery-desc col-xl-5 col-lg-7 m-auto text-center" dangerouslySetInnerHTML={{ __html: data.wpPage.acField.galleryDescription }}></div>
      <div className="card-co">
        {imagesMap}
      </div>

      <div className="styling d-flex justify-content-center" style={bgFunction(data.wpPage.acField.stylingIng.sourceUrl)}>
        <div className="styling-text d-flex justify-content-center">
          <div className="styling-title text-center" dangerouslySetInnerHTML={{ __html: data.wpPage.acField.stilyngTitle }}></div>
          <PlayBtnT func={"kk"} ></PlayBtnT>
        </div>
      </div>

    </section>
    <section className="container-fluid bottom-video">
      <Row as="div" className="btv-wrap d-flex justify-content-center">
        {postData}
      </Row>

    </section>



    {
      isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setIndex((photoIndex + 1) % images.length)
          }
        />
      )
    }

    {
      id === 1 ? <Modal handleClose={hideModal} id={id} show={show}>
        {data.wpPage.acField.firstVideo}
      </Modal> : null
    }
    {
      id === 2 ? <Modal handleClose={hideModal} id={id} show={show}>
        {data.wpPage.acField.secondVideo}
      </Modal> : null
    }
    {
      id === 3 ? <Modal handleClose={hideModal} id={id} show={show}>
        {data.wpPage.acField.stylingVideo}
      </Modal> : null
    }

  </PrimaryLayout >
  )
}


export const query = graphql`
query MyQuery {
  allWpPost {
    nodes{
      PostField {
        postVideo
      }
			title
      slug
      excerpt
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      date(locale: "ru", formatString: "MM DD, YY.")
    }
  }
  wpPage(slug: {eq: "glavnaya"}) {
   
    title
    slug
    acField {
      mineTitle
      subtitle
      fieldGroupName
      sectionTitle
      sectionDescription
      mainImage {
        sourceUrl
      }
      firstVideo
      videotitle
      videodescription
      secondVideo
      secondVideoTitle
      secondVideoDescription
      sectionDescription
      leftImg {
        sourceUrl
      }
      generationTitle
      generationSubtitle
      rightImg {
        sourceUrl
      }
      generationVideo
      galleryTitle
      galleryDescription
      gallery {
        sourceUrl
      }
      stilyngTitle
      stylingIng{
 				sourceUrl
    }
      stylingVideo
      footerTitle
      leftFooterImg{
			 sourceUrl
      }
      footerSocial
      copywrite
    }
  }
}

`


export default Home;