import React from 'react'
import liveStreamImg from '../../../img/new/awade.jpeg'
import './styles.css'
import Poster from '../Posters/Poster'
import Footer from '../../Footer/Footer'
import SweetNav from '../Nav/SweetNav'
import { Link } from 'react-router-dom'
import comments from '../../../comment'
import {
  ThumbUp,
  ThumbDown,
  ArrowDropUp,
  ArrowDropDown,
  VideocamOff,
  VolumeUp,
} from '@material-ui/icons'
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
const NoLiveStream = () => {
  return (
    <>
      <SweetNav other />
      <section className='noLiveStream mb-4'>
        <VideocamOff fontSize='large' className='videocamIcon' />
        <p className='text-white'>Live stream is currently not available</p>
      </section>
      <section className='comment_container'>
        <p className='font-extrabold'>
          {comments.length > 1 ? comments.length + 'comments' : '1 Comment'}
        </p>
        {comments.map((item) => {
          const { name, img, time, comment, like, dislike, replies } = item
          return (
            <>
              <div className='comment font-bold'>
                <div className='comment_line_one'>
                  <img
                    src={img}
                    alt={name}
                    className='w w-20 h-20 rounded-full'
                  />
                  <p className='mx-3'>{name}</p>
                  <p className='time'>{time}</p>
                </div>
                <div className='comment_item'>
                  <p>{comment}</p>
                  <ThumbUp />
                  <span className='ml-1 mr-2'>{like}</span>
                  <ThumbDown />
                  <span className='ml-1'>{dislike}</span>
                  <span className='ml-3'>REPLY</span>
                  <br />
                  <br />
                  <ArrowDropUp /> <span>Hide replies</span>
                </div>
                <div className='replies'>
                  <div className='comment_line_one'>
                    <img
                      src={replies.img}
                      alt={replies.name}
                      className='w w-10 h-10 rounded-full'
                    />
                    <p className='mx-3'>{replies.name}</p>
                    <p className='time'>{replies.time}</p>
                  </div>
                  <div className='comment_item'>
                    <p className='mt-0'>{replies.comment}</p>
                    <ThumbUp />
                    <span className='ml-1 mr-2'>{replies.like}</span>
                    <ThumbDown />
                    <span className='ml-1'>{replies.dislike}</span>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </section>
      <Footer />
    </>
  )
}

export default NoLiveStream
