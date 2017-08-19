export class Data{
     static User_Info: Arry = 
      {first_name: "Mike",
       last_name: "robberts",
       image: "img/users_img/Mike.jpg"
       alerts: [
                 'got new friend request',
                 'your sales went up this week',
                 'you created new task',
                 'you have 2 outdated tasks'
               ],
        tasks: {
                new: 4,
                updated: 2,
                content: [
                        {name: 'N',
                         content: 'New logo for JGD',
                         dotime: '2 days ago'
                        },
                        {name: 'G',
                         content: 'Upload new website',
                         dotime: '3 days ago'
                        },
                        {name: 'V',
                         content: 'Free business PSD',
                         dotime: '2 days left'
                        },
                        {name: 'N',
                         content: 'Free icons vol.3',
                         dotime: '10 days left'
                        }                                                                        
                      ]
                },
            messages{
                 new: 5,
                 content: [
                        {from: 'Nina Jones',
                         img: 'img/users_img/nina.jpg',
                         time: '10 minutes ago',
                         body: 'hey there, how are you?'
                        },
                        {from: 'Ron Kofman',
                         img: 'img/users_img/ron.jpg',
                         time: '15 minutes ago',
                         body: 'good morning, its me again'
                        },
                        {from: 'Jhon Bill',
                         img: 'img/users_img/jhon.jpg',
                         time: '19 minutes ago',
                         body: 'Hello, are we meeting?'
                        },
                        {from: 'Nina Jones',
                         img: 'img/users_img/nina.jpg',
                         time: '30 minutes ago',
                         body: 'Hey, whats going on?'
                        }                                                            
                    ]
                },
                activities:{
                    new: 7,
                    content: [
                        {from: 'Jhon Bill',
                         img: 'img/users_img/jhon.jpg',
                         activity: 'just send you',
                         subject: 'a new message',
                         time: 'Just now'
                         },
                        {from: 'Jhon Bill',
                         img: 'img/users_img/jhon.jpg',
                         activity: 'just send you',
                         subject: 'a friend request',
                         time: '15 minutes ago'
                        },
                        {from: 'Nina Jones',
                         img: 'img/users_img/nina.jpg',
                         activity: 'added a new project',
                         subject: 'Free kit',
                         time: '25 minutes ago'
                        },
                        {from: 'Ron Kofman',
                         img: 'img/users_img/ron.jpg',
                         activity: 'just uploaded',
                         subject: 'his new website',
                         time: '27 minutes ago'
                        },                                                                         
                    ],         
                }
            }

