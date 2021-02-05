import React from "react";
import { css, Global } from "@emotion/react";

export const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      @import "bulma/css/bulma.css";
      .navbar .navbar-menu {
        box-shadow: none !important;
      }
      .section {
        padding: 0 !important;
      }
      .content .taglist {
        list-style: none;
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 1.5rem;
        margin-top: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        li {
          padding: 0 2rem 1rem 0;
          margin-bottom: 1.5rem;
          margin-top: 0;
        }
      }

      // Helper Classes
      .full-width-image-container {
        width: 100vw;
        height: 20vh;
        position: relative;
        left: 50%;
        right: 50%;
        margin: 2em -50vw;
        background-size: cover;
        background-position: bottom;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .full-width-image {
        width: 100vw;
        height: 20vh;
        background-size: cover;
        background-position: bottom;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .btn {
        display: inline-block;
        padding: 12px 16px 10px;
        font-size: 18px;
        font-size: 1rem;
        line-height: 1.25;
        background-color: #fff;
        border-radius: 0.25rem;
        text-decoration: none;
        font-weight: 700;
        color: #cc3700;
        text-align: center;
        -webkit-box-shadow: inset 0 0 0 2px #cc3700;
        box-shadow: inset 0 0 0 2px #f40;
        -webkit-transition: all 0.15s ease;
        transition: all 0.15s ease;
      }
      .margin-top-0 {
        margin-top: 0 !important;
      }
      .navbar-item .icon {
        color: black;
        // Override for use of svg's from https://simpleicons.org/
      }
      .icon svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: white;
      }

      .navbar-brand .navbar-item.logo {
        padding: 0 1rem;
      }
      footer.footer {
        padding: 3rem 0rem 0rem;
        padding-bottom: 4rem;
        background-color: transparent;
      }
      //Menu overrides

      .menu-label {
        font-size: 1em !important;
        text-align: left;
      }
      .menu-list {
        list-style: none !important;
        text-align: left;
      }
      .social {
        padding: 2em;
      }

      .social a {
        padding: 0.5em 0.5em 0.3em 0.5em;
        border-radius: 1em;
        background-color: #f7f7f7;
        margin: 0.5em;
        width: 1em;
        height: 1em;
        vertical-align: middle;
        display: inline;
      }
      // blog roll
      .blog-list-item.is-featured {
        background-color: #d64033;
      }
      .blog-list-item header {
        display: flex;
        margin-bottom: 1em;
      }
      .blog-list-item .featured-thumbnail {
        flex-basis: 35%;
        margin: 0 1.5em 0 0;
      }
    `}
  />
);
