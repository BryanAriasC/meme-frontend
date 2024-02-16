import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import { Meme } from '../models/Meme';
import { getMemeById } from '../services/memeService';
import {Layout} from '../components/layout/Layout';
import { FavoriteBorderOutlined as FavoriteBorderIcon, CommentOutlined as CommentIcon } from '@mui/icons-material';

export const MemeDetailPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [meme, setMeme] = useState<Meme | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (id) {
      getMemeById(parseInt(id))
        .then(response => {
          setMeme(response.data);
        })
        .catch(error => {
          console.error('Error fetching meme details:', error);
        });
    }
  }, [id]);

  if (!meme) {
    return <div>Loading...</div>;
  }

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom className="titleDetail" sx={{ padding: '20px' }}>
        {meme.name}
      </Typography>
      <Card className="cardDetail">
        <CardContent className="cardContentDetail">
          <div className="imageContainerDetail"> 
            <img src={meme.image} alt={meme.name} className="imageDetail" />
          </div>
          {showFullDescription ? (
            <Typography variant="body1" className="descriptionDetail">
              {meme.description}
            </Typography>
          ) : (
            <Typography variant="body1" className="descriptionDetail">
              {meme.description.slice(0, 150)} 
              {meme.description.length > 150 && '...'} 
            </Typography>
          )}
          {meme.description.length > 150 && ( 
            <Button onClick={toggleDescription} color="primary">
              {showFullDescription ? 'Mostrar menos' : 'Mostrar más'}
            </Button>
          )}
          <div className="metadataDetail">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <Typography variant="body2">{meme.likes}</Typography>
            <IconButton>
              <CommentIcon />
            </IconButton>
            <Typography variant="body2">{meme.comments}</Typography>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

