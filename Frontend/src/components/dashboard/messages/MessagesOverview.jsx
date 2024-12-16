import { motion } from 'framer-motion';
import { ChatBubbleLeftIcon, EnvelopeIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import MessageList from './MessageList';
import StatCard from '../StatCard';
import { useMessages } from '../../../context/MessageContext';

const MessagesOverview = () => {
  const { state: { messages } } = useMessages();

  const totalMessages = messages.length;
  const unreadMessages = messages.filter(m => !m.read).length;
  const inquiries = messages.filter(m => m.type === 'inquiry').length;
  const support = messages.filter(m => m.type === 'support').length;

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Messages Overview</h2>
        <p className="text-gray-400">Manage customer communications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Messages"
          value={totalMessages}
          icon={ChatBubbleLeftIcon}
          trend={7.2}
        />
        <StatCard
          title="Unread Messages"
          value={unreadMessages}
          icon={EnvelopeIcon}
          trend={-4.3}
        />
        <StatCard
          title="Inquiries"
          value={inquiries}
          icon={CheckCircleIcon}
          trend={12.1}
        />
        <StatCard
          title="Support Requests"
          value={support}
          icon={ClockIcon}
          trend={3.8}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0a0f1c] rounded-xl p-6 border border-[#1c2537]"
      >
        <MessageList />
      </motion.div>
    </div>
  );
};

export default MessagesOverview;