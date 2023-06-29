import React, { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { firebase } from '@react-native-firebase/database';

import firebaseConfig from './FirebaseConfig'
import moment from 'moment';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = () => {
      firebase
        .database()
        .ref('messages')
        .on('value', (snapshot) => {
          const messageList = [];
          snapshot.forEach((child) => {
            const message = child.val();
            messageList.unshift({
              _id: child.key,
              text: message.text,
              createdAt: new Date(message.createdAt),
              user: {
                _id: message.user._id,
                name: message.user.name,
                avatar: message.user.avatar,
              },
            });
          });
          setMessages(messageList);
        });
    };
    fetchMessages();

    return () => {
      firebase.database().ref('messages').off();
    };
  }, []);

  const onSend = (newMessages = []) => {
    const userMessage = newMessages[0];
    firebase
      .database()
      .ref('messages')
      .push()
      .set(userMessage);
    let botMessage;
    if (userMessage.text.includes('Hi')) {
      botMessage = {
        _id: new Date().getTime(),
        text: 'Hello! How can I assist you?',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
    } else if (userMessage.text.includes('Help')) {
      botMessage = {
        _id: new Date().getTime(),
        text: 'Sure! I can help you with that.',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
    } else if (userMessage.text.includes('Bye')) {
      botMessage = {
        _id: new Date().getTime(),
        text: 'Goodbye! Have a great day!',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
    } else if (userMessage.text.includes('Weather')) {
      botMessage = {
        _id: new Date().getTime(),
        text: 'The weather is currently sunny and 25°C.',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
    } else if (userMessage.text.includes('News')) {
      botMessage = {
        _id: new Date().getTime(),
        text: 'Here are the latest news headlines: [news headlines]',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
    }
    else if (userMessage.text.includes('Suggest me food')) {
      const availableFoods = ['Pizza', 'Pasta', 'Burger', 'Sushi'];
      const foodOptions = availableFoods.map((food, index) => `${index + 1}. ${food}`).join('\n');
    
      botMessage = {
        _id: new Date().getTime(),
        text: `Sure! Here are some food suggestions:\n${foodOptions}\n\nPlease enter the number of the food item you'd like to know more about.`,
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
     /* const userSelection = parseInt(userMessage.text);
      if (!isNaN(userSelection) && userSelection >= 1 && userSelection <= availableFoods.length) {
        const selectedFood = availableFoods[userSelection - 1];
    
        if (selectedFood === 'Pizza') {
          const bestPizzaRestaurant = 'Pizza Paradise';
          const pizzaDetails = 'Pizza Paradise offers a variety of mouth-watering pizzas with a wide range of toppings. Their crust is crispy, and the cheese is perfectly melted. Don\'t miss out on their specialty, the Margherita Pizza!';
    
          botMessage.text = `For Pizza, the best restaurant is ${bestPizzaRestaurant}.\n\nHere are the details:\n${pizzaDetails}`;
        } else if (selectedFood === 'Pasta') {
          // Add logic for Pasta
        } else if (selectedFood === 'Burger') {
          // Add logic for Burger
        } else if (selectedFood === 'Sushi') {
          // Add logic for Sushi
        }
      } else {
        botMessage.text = 'Invalid selection. Please enter a valid number for the food item you want to know more about.';
      }*/
    }
    
    
    else if (userMessage.text.includes('Recipes')) {
      botMessage = {
        _id: new Date().getTime(),
        text: 'Here is a delicious recipe',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
      const availableFoods = ['Pizza', 'Pasta', 'Burger', 'Sushi'];
      const foodOptions = availableFoods.map((food, index) => `${index + 1}. ${food}`).join('\n');
    
      botMessage.text += `\n\nYou can try these delicious foods:\n${foodOptions}\n\nPlease enter the number of the food item you want to know more about.`;
    
    }
    else if (userMessage.text.includes('Movies')) {
      botMessage = {
        _id: new Date().getTime(),
        text: 'Here are some popular movies: [list of movies]',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
    } else if (userMessage.text.includes('Sports')) {
      botMessage = {
        _id: new Date().getTime(),
        text: 'Which sport are you interested in? [sport details]',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
    } else if (userMessage.text.includes('Music')) {
      botMessage = {
        _id: new Date().getTime(),
        text: 'Here is a popular song: [song details]',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
    } else if (userMessage.text.includes('Gaming')) {
      botMessage = {
        _id: new Date().getTime(),
        text: 'Do you have a specific game in mind? [game details]',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
    } else {
      botMessage = {
        _id: new Date().getTime(),
        text: 'Sorry, I didn\'t understand. Can you please rephrase?',
        createdAt: new Date().toISOString(),
        user: {
          _id: 'bot',
          name: 'Bot',
          avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
        },
      };
    }

    setTimeout(() => {
      firebase
        .database()
        .ref('messages')
        .push()
        .set(botMessage);
    }, 1000);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 'messages',
        name: 'food',
        avatar: 'https://media.istockphoto.com/id/1177016383/vector/chat-bot-using-laptop-computer-robot-virtual-assistance-of-website-or-mobile-applications.jpg?s=612x612&w=0&k=20&c=KAfaylhqBeAAPPvnoyaeSqfDAtbCR6OkjcQtUl1aCBE=',
      }}
    />
  );
};

export default ChatScreen;
