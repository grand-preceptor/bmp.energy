import React from 'react';
import { string } from 'prop-types';

import './image.scss';

const renderEmpty = () => <div className="image__placeholder" />;

const renderImage = (imageSource, srcHeight, srcWidth) => (
  imageSource ? (
    <img
      className="image__src"
      src={ imageSource }
      alt="client logo"
      style={ { height: srcHeight, width: srcWidth } }
    />
  ) : renderEmpty());

export const Image = ({ imageSource, containerHeight, containerWidth, srcHeight, srcWidth }) => (
  <div className="image" style={ { height: containerHeight, width: containerWidth } }>
    { renderImage(imageSource, srcHeight, srcWidth) }
  </div>
);

Image.propTypes = {
  imageSource: string,
  containerHeight: string,
  containerWidth: string,
  srcHeight: string,
  srcWidth: string,
};

Image.defaultProps = {
  imageSource: undefined,
  containerHeight: undefined,
  containerWidth: undefined,
  srcHeight: undefined,
  srcWidth: undefined,
};
