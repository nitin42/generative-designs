import { injectGlobal } from 'react-emotion'

injectGlobal`
  body {
    color: #4f4f4f;
    background: #fffcfc;
  }

  i {
    cursor: pointer;
  }

  .slider {
    -webkit-appearance: none;
    width: 320px;
    height: 8px;
    border-radius: 5px;   
    background: #e4e4e4;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #222334;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #222334;
    cursor: pointer;
  }

  ul {
    list-style: none;
    font-size: 1em;
    text-align: left;
  }

  li {
    margin: 10px;
    padding: 10px;
  }

  a {
    text-decoration: none;
    color: #4f4f4f;
  }

  @media screen and (max-device-width: 480px) {
    .slider {
      width: 260px;
      height: 4px;
    }

    .slider::-webkit-slider-thumb {
      width: 15px;
      height: 15px;
    }

    .slider::-moz-range-thumb {
      width: 15px;
      height: 15px;
    }
  }
`
