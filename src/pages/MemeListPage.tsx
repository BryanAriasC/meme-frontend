import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Typography, IconButton } from '@mui/material';
import { Meme } from '../models/Meme';
import { getMemes } from '../services/memeService';
import {Layout} from '../components/layout/Layout';
import { FavoriteBorderOutlined as FavoriteBorderIcon, CommentOutlined as CommentIcon } from '@mui/icons-material';

export const MemeListPage: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await getMemes();
        setMemes(response.data);
      } catch (error) {
        console.error('Error fetching memes:', error);
      }
    };

    fetchMemes();
  }, []);

  return (
    <Layout>
      <Typography variant="h4" gutterBottom className="titleList" sx={{ padding: '20px' }}>
        Memes
      </Typography>
      {memes.map((meme) => (
        <Card key={meme.id} className="cardList">
          <CardContent className="cardContentList">
            <div className="imageContainerList">
              <img src={meme.image} alt={meme.name} className="imageList" />
            </div>
            <div className="contentContainerList">
              <div>
                <Typography variant="h6" className="titleList">
                  {meme.name}
                </Typography>
                <div className="metadataList">
                  <Typography>
                    <IconButton component={Link} to={`/memes/${meme.id}`} className="iconButtonList">
                      <FavoriteBorderIcon />
                    </IconButton>
                    Likes: {meme.likes}
                  </Typography>
                  <Typography>
                    <IconButton component={Link} to={`/memes/${meme.id}`} className="iconButtonList">
                      <CommentIcon />
                    </IconButton>
                    Comments: {meme.comments}
                  </Typography>
                </div>
              </div>
              <Button component={Link} to={`/memes/${meme.id}`} variant="contained" color="primary">
                Ver detalles
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </Layout>
  );
};

export default MemeListPage;
