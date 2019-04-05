import {expectType} from 'tsd';
import copyTextToClipboard = require('.');

expectType<boolean>(copyTextToClipboard('🦄🌈'));
