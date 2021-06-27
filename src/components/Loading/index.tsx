import Lottie from 'react-lottie';
import loadingJson from '../../assets/images/lf30_editor_hzv93m9z.json';

import './styles.scss';

export function Loading() {
  return (
    <div className="lottie">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: loadingJson,
        }}
        height={300}
        width={300}
      />
    </div>
  );
}
