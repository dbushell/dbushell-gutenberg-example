import {registerBlockType} from '@wordpress/blocks';

// Import blocks
import Basic from './01-basic';
import TextControl from './02-text-control';
import PreviewMode from './04-preview-mode';

const blocks = [Basic, TextControl, PreviewMode];

blocks.forEach(block => registerBlockType(block.name, block));
