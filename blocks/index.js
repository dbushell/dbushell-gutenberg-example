import {registerBlockType} from '@wordpress/blocks';

// Import blocks
import Basic from './01-basic';
import TextControl from './02-text-control';
import PreviewMode from './04-preview-mode';
import IFramePreview from './05-iframe-preview';

const blocks = [Basic, TextControl, IFramePreview, PreviewMode];

blocks.forEach(block => registerBlockType(block.name, block));
