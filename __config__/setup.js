import { JSDOM } from 'jsdom';

const documentHTML = `<!DOCTYPE html><html><body><div id="root"></div></body></html>`;
global.document = new JSDOM(documentHTML);