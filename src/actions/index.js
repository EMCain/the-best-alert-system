import generateWarning from './middleware/messages.js';

export const setBaseMessage = () => {
  const message = generateWarning();
  return {
    type: 'SET_BASE_MESSAGE', 
    message
  }
}