const Books = [
    {
    type:"novel",
    id:"1234", 
    name: "The Silent Patient", 
    image: "https://img.etimg.com/photo/msid-98033506,imgsize-27752/TheSilentPatientbyAlexMichaelides.jpg", 
    author: "Alex Michaelides", 
    price: 10.99,
    description:"Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.Alicia’s refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety. The price of her art skyrockets, and she, the silent patient, is hidden away from the tabloids and spotlight at the Grove, a secure forensic unit in North London."
    },
    { 
    type:"novel",
    id:"1235", 
    name: "The Kiss Quotient", 
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549390054-51UTM2Bgx50L.jpg?crop=1xw:0.999xh;center,top&resize=980:*", 
    author: "Helen Hoang", 
    price: 14.99,
    description:"A heartwarming and refreshing debut novel that proves one thing: there's not enough data in the world to predict what will make your heart tick Stella Lane thinks mathematics is the only thing that unites the universe. She comes up with algorithms to predict customer purchases - a job that has given her more money than she knows what to do with and far less experience in the dating department than the average thirty-year-old. It doesn't help that Stella has Asperger's and French kissing reminds her of a shark getting its teeth cleaned by pilot fish. Her conclusion: she needs lots of practice - with a professional. Which is why she hires escort Michael Phan. Gorgeous and conflicted, Michael can't afford to turn down Stella's offer and agrees to help her check off all the boxes on her lesson plan, from foreplay to more-than-missionary position. Before long, Stella not only learns to appreciate his kisses but to crave all of the other things he's making her feel. Their no-nonsense partnership starts making a strange kind of sense. And the pattern that emerges will convince Stella that love is the best kind of logic.." 

    },
    { 
    type:"novel",
    id:"1236", 
    name: "The Love Hypothesis", 
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1687809934-61BazoqIr3L.jpg?crop=1xw:1xh;center,top&resize=980:*", 
    author: "Ali Hazlewood", 
    price: 14.99,
    description:"As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees."
 },
    {
        type:"novel", 
    id:"1237",
    name: "2 states", 
    image: "https://upload.wikimedia.org/wikipedia/en/3/3a/2_States_-_The_Story_Of_My_Marriage.jpg",
     author: "Chetan Bhagat", 
     price: 14.99,
     description:"The story is about a couple Krish and Ananya, who hail from two states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry. It is narrated from a first-person point of view in a humorous tone, often taking digs at both Tamil and Punjabi cultures."
     },
    { 
    type:"novel",
    id:"1238", 
    name: "The invisible man", 
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg/220px-The_Invisible_Man_%282020_film%29_-_release_poster.jpg",
    author: "H.G. WELLS", 
    price: 14.99,
    description:"The Invisible Man, science-fiction novel by H.G. Wells, published in 1897. The story concerns the life and death of a scientist named Griffin who has gone mad. Having learned how to make himself invisible, Griffin begins to use his invisibility for nefarious purposes, including murder. When he is finally killed, his body becomes visible again." 
    },
    { 
    type:"novel",
    id:"1239", 
    name: "Three men in a boat", 
    image: "https://m.media-amazon.com/images/I/61+3fHdrKwL._AC_UF350,350_QL50_.jpg", 
    author: "jerome k jerome", 
    price: 14.99,
    description:""
 },
 {
    type:"autobiography",
    id: "1241",
    name: "The Diary of a Young Girl",
    image: "https://images.penguinrandomhouse.com/cover/9780553577129",
    author: "Anne Frank",
    price: 12.99
  },
  {
    type:"autobiography",
    id: "1242",
    name: "Long Walk to Freedom",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327997342i/318431.jpg",
    author: "Nelson Mandela",
    price: 14.99
  },
  {
    type:"autobiography",
    id: "1243",
    name: "Steve Jobs",
    image: "https://m.media-amazon.com/images/I/71u2lGdX7HL._AC_UF1000,1000_QL80_.jpg",
    author: "Walter Isaacson",
    price: 15.99
  },
  {
    type:"autobiography",
    id: "1244",
    name: "The Glass Castle",
    image: "https://images.penguinrandomhouse.com/cover/9780743247542",
    author: "Jeannette Walls",
    price: 13.99
  },
  {
    type:"autobiography",
    id: "1245",
    name: "Angela's Ashes",
    image: "https://images.penguinrandomhouse.com/cover/9780684842677",
    author: "Frank McCourt",
    price: 12.99
  },
  {
    type:"autobiography",
    id: "1246",
    name: "Becoming",
    image: "https://images.penguinrandomhouse.com/cover/9781524763138",
    author: "Michelle Obama",
    price: 17.99
  },
  {
    type:"autobiography",
    id: "1247",
    name: "Elon Musk",
    image: "https://m.media-amazon.com/images/I/81cdxHMnmmL._AC_UF1000,1000_QL80_.jpg",
    author: "Ashlee Vance",
    price: 16.99
  },
  {
    type:"autobiography",
    id: "1248",
    name: "The Story of My Experiments with Truth",
    image: "https://m.media-amazon.com/images/I/51kzTnyeDmL._SL500_.jpg",
    author: "Mahatma Gandhi",
    price: 11.99
  },
  {
    type:"autobiography",
    id: "1249",
    name: "I Know Why the Caged Bird Sings",
    image: "https://images.penguinrandomhouse.com/cover/9780345514400",
    author: "Maya Angelou",
    price: 14.99
  },
  {
    type:"autobiography",
    id: "1250",
    name: "The Wright Brothers",
    image: "https://images.penguinrandomhouse.com/cover/9781476728742",
    author: "David McCullough",
    price: 13.99
  }
];
export default Books;
  