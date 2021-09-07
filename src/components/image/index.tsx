import React, {useMemo, useState} from 'react';
import {Image as RNImage, ImageProps} from 'react-native';

export const Image = ({source, ...props}: ImageProps): JSX.Element => {
    const [error, setError] = useState(false);

    const imageSource = useMemo(
        () => (error ? require('../../../assets/img/image-not-available.png') : source),
        [error, source],
    );

    return <RNImage {...props} source={imageSource} onError={() => setError(true)} />;
};
