import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const BlogCard = ({ image, category, title, description, author, date, readTime }) => {
  return (
    <Box sx={{ 
      bgcolor: 'white',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)'
    }}>
      <Box 
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          height: 240,
          objectFit: 'cover'
        }}
      />
      <Box sx={{ p: 3 }}>
        <Typography 
          variant="subtitle2" 
          color="primary" 
          sx={{ mb: 1, fontWeight: 600 }}
        >
          {category}
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ mb: 2, fontWeight: 'bold' }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: 3 }}
        >
          {description}
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={`/images/${author.split(' ')[0].toLowerCase()}.png`}
              alt={author}
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                mr: 1
              }}
            />
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {author}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {date} - {readTime}
              </Typography>
            </Box>
          </Box>
          
          <Box>
            <IconButton size="small">
              <FavoriteBorderIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton size="small">
              <BookmarkBorderIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Blogs = () => {
  const blogPosts = [
    {
      image: '/images/emilyPostImg.png',
      category: 'Weight Loss',
      title: 'The Benefits of Hydration for Weight Loss',
      description: 'Discover how staying hydrated can support your weight loss goals and improve overall health.',
      author: 'Jenifer Smith',
      date: '23 May 2023',
      readTime: '5 min read'
    },
    {
      image: '/images/saraPostImg.png',
      category: 'Mindful Eating',
      title: 'Cultivating a Healthy Relationship with Food',
      description: 'Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.',
      author: 'Sara Thompson',
      date: '23 May 2023',
      readTime: '5 min read'
    },
    {
      image: '/images/markPostImg.png',
      category: 'Understanding Macronutrients',
      title: 'Carbohydrates, Proteins, and Fats',
      description: 'Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.',
      author: 'Mark Wilson',
      date: '23 May 2023',
      readTime: '5 min read'
    },
    {
      image: '/images/Emily2PostImg.png',
      category: 'Healthy Snacks on the Go',
      title: 'Quick and Nutritious Options',
      description: 'Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.',
      author: 'Emily Johnson',
      date: '23 May 2023',
      readTime: '5 min read'
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Our Blogs
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <BlogCard {...post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;