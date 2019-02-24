import {expectType} from 'tsd-check';
import copyToClipboard from '.';

expectType<boolean>(copyToClipboard('yolo'));