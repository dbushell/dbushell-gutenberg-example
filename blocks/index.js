import {registerBlockType} from '@wordpress/blocks';

// Import blocks
import Basic from './01-basic';
import TextControl from './02-text-control';

const blocks = [Basic, TextControl];

blocks.forEach(block => registerBlockType(block.name, block));
