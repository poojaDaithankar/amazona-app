import bcrypt from 'bcryptjs';
const data={ 
  users: [
  {
    name: 'pooja',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: true,
  },
  {
    name: 'saurabh',
    email: 'user@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: false,
  },
],
    products: [
        {
          name: 'Yoke Rayon Top',
          category: 'Top',
          image: '/images/p1.jpg',
          price: 120,
          countInStock: 8,
          brand: 'Yoke',
          rating: 4.5,
          numReviews: 10,
          description: 'high quality Ladies product',
        },
        {
          
            name: 'Saakaa woman Top',
            category: 'Top',
            image: '/images/p2.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Saakaa',
            rating: 3.5,
            numReviews: 10,
            description: 'high quality Ladies product',
          },
          {
           
            name: 'Jazzy Ben Top',
            category: 'Top',
            image: '/images/p3.jpg',
            price: 120,
            countInStock: 5,
            brand: 'Jazzy',
            rating: 4.5,
            numReviews: 18,
            description: 'high quality Ladies product',
          },
          {
           
            name: 'Zaphire Multicolored Top',
            category: 'Top',
            image: '/images/p4.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Zaphire',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality Ladies product',
          },
          {
           
            name: 'Fabrange regular Top',
            category: 'Top',
            image: '/images/p5.jpg',
            price: 120,
            countInStock: 12,
            brand: 'Fabrange',
            rating: 4.5,
            numReviews: 25,
            description: 'high quality Ladies product',
          },
          {
            
            name: 'Tunics Ladies Top',
            category: 'Top',
            image: '/images/p6.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Tunics',
            rating: 4.5,
            numReviews: 35,
            description: 'high quality Ladies product',
          },

    ]
};
export default data;   

    
