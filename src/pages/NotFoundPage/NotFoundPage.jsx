import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '../../components/common/Paper/Paper';
import { NotFoundPageIcon } from '../../components/icons';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="global_container">
      <Paper>
        <div className={s.container}>
          <div className={s.icon_container}>
            <NotFoundPageIcon width="200px" />
          </div>
          <div className={s.content_container}>
            <h1 className={s.title}>Oopsie! We couldn't find this page</h1>
            <div className={s.description}>
              Mistakes happen... and that's okay. You will be redirected to
              <span className={s.accent}> The Home Page</span> and start your
              journey from there
              <span className={s.accent}> {countdown} seconds.</span>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default NotFoundPage;
