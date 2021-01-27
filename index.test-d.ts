import {expectType} from 'tsd';
import copyTextToClipboard from './index.js';

expectType<boolean>(copyTextToClipboard('🦄🌈'));
