import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useMessages } from '../../../context/MessageContext';

const MessageList = () => {
  const { state: { messages }, dispatch } = useMessages();

  const handleMarkAsRead = (messageId) => {
    dispatch({ type: 'MARK_AS_READ', payload: messageId });
  };

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg border ${
            message.read ? 'border-[#1c2537] bg-[#1c2537]/50' : 'border-[#33bbcf] bg-[#33bbcf]/5'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <img
                src={message.sender.avatar}
                alt={message.sender.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <div className="text-white font-medium">{message.sender.name}</div>
                <div className="text-gray-400 text-sm">
                  {format(new Date(message.timestamp), 'MMM dd, yyyy HH:mm')}
                </div>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              message.type === 'inquiry'
                ? 'bg-blue-500/10 text-blue-500'
                : 'bg-purple-500/10 text-purple-500'
            }`}>
              {message.type}
            </span>
          </div>
          <p className="mt-3 text-gray-300">{message.content}</p>
          {!message.read && (
            <button
              onClick={() => handleMarkAsRead(message.id)}
              className="mt-3 text-[#33bbcf] text-sm hover:underline"
            >
              Mark as read
            </button>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MessageList;