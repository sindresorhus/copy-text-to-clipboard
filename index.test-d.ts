import {expectType} from 'tsd-check';
import copyTextToClipboard from '.';

expectType<boolean>(copyTextToClipboard('🦄🌈'));
