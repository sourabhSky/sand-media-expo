export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
  tableOfContents: { id: string; title: string }[];
  trendingTopics: string[];
  relatedArticles: { slug: string; title: string; image: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-chatbots-rag-integration',
    title: 'AI Chatbots with RAG Integration: Why Enterprises Are Replacing Basic Bots with Context-Driven AI',
    date: 'April 24, 2026',
    category: 'Technology',
    author: 'Sand Media Team',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    excerpt: 'Discover why standard chatbots are failing at the enterprise level and how RAG (Retrieval-Augmented Generation) is changing the landscape of business AI.',
    tableOfContents: [
      { id: 'break-down', title: 'Where Standard AI Chatbots Break Down' },
      { id: 'architecture', title: 'Core Architecture of a RAG-Based AI Chatbot' },
      { id: 'value', title: 'Industry-Specific AI Chatbot with RAG Integration' },
      { id: 'how-to-build', title: 'Step-by-Step: How to Build Your First RAG Chatbot' },
      { id: 'why-choose', title: 'Why Enterprises Choose Sand Media for AI' }
    ],
    content: `
      <p class="mb-6">You are building or evaluating an AI chatbot with RAG because a standard chatbot does not meet your organization's operational needs. An AI-powered chatbot may sound like the right solution, but without the right retrieval architecture, it does not truly understand your business.</p>
      
      <p class="mb-6">The marketplace is clearly moving in this direction. The global chatbot market is projected to grow from $9.3 billion in 2025 to $32.45 billion by 2031 at a 23% CAGR. At the same time, the RAG market is expected to grow from $1.92 billion in 2025 to $10.2 billion by 2030.</p>

      <h2 id="break-down" class="text-3xl font-bold mt-12 mb-6">Where Standard AI Chatbots Break Down at the Enterprise Level and RAG way to enhance it</h2>
      
      <p class="mb-6">Enterprise might be getting fruitful outcomes with the integration of LLM capabilities in chatbots. However, with the fast-forward tech revolution, questions about AI chatbot output and how to scale are also increasing.</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-4">
        <li><strong>Hallucination:</strong> We have heard, but still ignore it. Yes, AI-based chatbots nowadays are using the word "hallucination," where the response given by the AI chatbot seems accurate but is wrong.</li>
        <li><strong>Static Knowledge:</strong> Traditional bots are trained on datasets that become obsolete the moment training ends.</li>
        <li><strong>Lack of Context:</strong> Without RAG, bots cannot access your private documents, wikis, or real-time database records.</li>
      </ul>

      <h2 id="architecture" class="text-3xl font-bold mt-12 mb-6">Core Architecture of a RAG-Based AI Chatbot</h2>
      <p class="mb-6">A RAG system consists of three main components: a vector database, an embedding model, and the Large Language Model itself. When a user asks a question, the system first retrieves relevant documents from the vector database before generating an answer.</p>
    `,
    trendingTopics: ['AI ML', 'Cloud', 'Data Analytics', 'IoT', 'RAG'],
    relatedArticles: [
      {
        slug: 'benefits-dynamics-crm',
        title: 'Benefits Of Dynamics CRM Integration With SharePoint',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&q=80'
      },
      {
        slug: 'microsoft-dynamics-365',
        title: 'Microsoft Dynamics 365 Customization to Enhance Your Operational Efficiency',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&q=80'
      }
    ]
  },
  {
    id: '2',
    slug: 'sand-media-base-growth',
    title: 'How Sand Media Base is Revolutionizing Digital Marketing for Small Businesses',
    date: 'April 20, 2026',
    category: 'Marketing',
    author: 'Sand Media Base',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    excerpt: 'Learn how Sand Media Base provides the foundation for digital success with integrated marketing strategies and advanced analytics.',
    tableOfContents: [
      { id: 'foundation', title: 'The Foundation of Digital Success' },
      { id: 'integration', title: 'Integrated Marketing Strategies' },
      { id: 'analytics', title: 'Advanced Analytics and Reporting' }
    ],
    content: `
      <p class="mb-6">In today's competitive landscape, small businesses need more than just a website. They need a comprehensive digital foundation that combines SEO, social media, and data-driven insights. This is where <strong>Sand Media Base</strong> comes in.</p>
      
      <h2 id="foundation" class="text-3xl font-bold mt-12 mb-6">The Foundation of Digital Success</h2>
      <p class="mb-6">Sand Media Base was built with the vision of leveling the playing field. By providing high-end agency tools to small and medium enterprises, we enable growth that was previously only accessible to large corporations.</p>
    `,
    trendingTopics: ['Digital Marketing', 'SEO', 'Business Growth'],
    relatedArticles: [
      {
        slug: 'ai-chatbots-rag-integration',
        title: 'AI Chatbots with RAG Integration',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150&q=80'
      }
    ]
  },
  {
    id: '3',
    slug: 'future-of-media-expo-2026',
    title: 'Media Expo 2026: What to Expect from the Sand Media Showcase',
    date: 'April 15, 2026',
    category: 'Events',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?w=1200&q=80',
    excerpt: 'Join us at Media Expo 2026 as we unveil our latest innovations in media technology and digital storytelling.',
    tableOfContents: [
      { id: 'innovation', title: 'Innovations in Media Tech' },
      { id: 'storytelling', title: 'Digital Storytelling Reimagined' },
      { id: 'networking', title: 'Networking Opportunities' }
    ],
    content: `
      <p class="mb-6">The upcoming Media Expo 2026 is set to be the biggest event in our history. We are excited to showcase how Sand Media Base is pushing the boundaries of what's possible in digital media.</p>
      
      <h2 id="innovation" class="text-3xl font-bold mt-12 mb-6">Innovations in Media Tech</h2>
      <p class="mb-6">Our booth will feature live demonstrations of our RAG-integrated chatbots and our new real-time analytics dashboard designed specifically for media companies.</p>
    `,
    trendingTopics: ['Events', 'Media Technology', 'Innovation'],
    relatedArticles: [
      {
        slug: 'sand-media-base-growth',
        title: 'How Sand Media Base is Revolutionizing Digital Marketing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&q=80'
      }
    ]
  }
];
