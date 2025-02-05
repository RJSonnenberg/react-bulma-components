import { BulmaComponentWithoutRenderAs } from '..';

export interface ImageProps {
  src: string;
  alt?: string;
  rounded?: boolean;
  size?:
    | 16
    | 24
    | 32
    | 48
    | 64
    | 96
    | 128
    | 'square'
    | '1by1'
    | '4by3'
    | '3by2'
    | '16by9'
    | '2by1'
    | '5by4'
    | '5by3'
    | '3by1'
    | '4by5'
    | '3by4'
    | '2by3'
    | '3by5'
    | '9by16'
    | '1by2'
    | '1by3'
    | String
    | Number;
  fallback?: string;
  fullwidth?: boolean;
}

declare const Image: BulmaComponentWithoutRenderAs<ImageProps, 'figure'>;

export default Image;
