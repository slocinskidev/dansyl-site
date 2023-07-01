import React from 'react';

export const ContactMapIframe = () => (
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10263.202804026005!2d18.615428!3d49.977596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471152e903ea4329%3A0x6b6c7464924bffff!2sF.H.U.%20Dansyl%20Blacharstwo-Lakiernictwo%20samochodowe!5e0!3m2!1spl!2spl!4v1688217033251!5m2!1spl!2spl'
    width='100%'
    height='100%'
    style={{
      border: 0,
    }}
    allowFullScreen
    loading='lazy'
    referrerPolicy='no-referrer-when-downgrade'
    title='dansyl-map'
  />
);
