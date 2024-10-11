import Clipboard from '@react-native-clipboard/clipboard';
import {useState} from 'react';

const useCopyClipboard = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (str: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        Clipboard.setString(str);
        setCopiedText(str);
        resolve(str);
      } catch (error) {
        console.error('Error copying to clipboard:', error);
        reject('Error copying to clipboard');
      }
    });
  };

  return {
    copyToClipboard,
    copiedText
  };
};

export default useCopyClipboard;


/**
const {copyToClipboard, copiedText} = useCopyClipboard();

copyToClipboard('Hello world')
  .then((text) => {
    console.log('Copied text:', text);
  })
  .catch((error) => {
    console.error('Failed to copy text:', error);
  });

*/