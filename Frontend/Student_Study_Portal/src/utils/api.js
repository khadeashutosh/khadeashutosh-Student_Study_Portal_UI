// Mock API functions for development
export const api = {
  // Notes API
  getNotes: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'React Hooks Guide', content: 'useState, useEffect, useContext...', category: 'Programming', createdAt: '2025-01-15' },
          { id: 2, title: 'Math Formulas', content: 'Quadratic equation, derivatives...', category: 'Mathematics', createdAt: '2025-01-14' },
        ]);
      }, 500);
    });
  },

  createNote: async (noteData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...noteData, id: Date.now(), createdAt: new Date().toISOString().split('T')[0] });
      }, 300);
    });
  },

  // Homework API
  getHomework: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Math Assignment - Chapter 5', subject: 'Mathematics', dueDate: '2025-01-20', status: 'pending', priority: 'high' },
          { id: 2, title: 'English Essay - Shakespeare', subject: 'English', dueDate: '2025-01-18', status: 'in-progress', priority: 'medium' },
        ]);
      }, 500);
    });
  },

  // YouTube API (Mock)
  searchYouTube: async (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: `Videos about ${query}`, channel: 'YouTube', views: '1.2M views', duration: '15:30', published: '2 days ago' },
        ]);
      }, 1000);
    });
  },

  // Dictionary API (Mock)
  searchDictionary: async (word) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            word: word,
            phonetic: 'fəˈnedʒɪk',
            meanings: [
              {
                partOfSpeech: 'adjective',
                definitions: [
                  {
                    definition: 'Relating to or denoting a word that functions as an adjective.',
                    example: 'The adjective form is more common in this context.'
                  }
                ]
              }
            ]
          }
        ]);
      }, 1000);
    });
  }
};