import { Canvas, Path, Skia } from '@shopify/react-native-skia';
import React from 'react';
import { useDerivedValue, useFrameCallback, useSharedValue } from 'react-native-reanimated';

const SkiaWave = ({ percentage }) => {
  const progress = useSharedValue(0);

  useFrameCallback((info) => {
    progress.value = (progress.value + 0.01) % (2 * Math.PI);
  });

  const path = useDerivedValue(() => {
    const p = Skia.Path.Make();
    const amplitude = 10;
    const frequency = 0.02;
    const height = 160;
    const width = 60;
    const y = height - (height * percentage) / 100;

    p.moveTo(0, y);
    for (let x = 0; x <= width; x++) {
      const wave = Math.sin(x * frequency + progress.value) * amplitude;
      p.lineTo(x, y + wave);
    }
    p.lineTo(width, height);
    p.lineTo(0, height);
    p.close();
    return p;
  });

  return (
    <Canvas style={{ flex: 1 }}>
      <Path path={path} color="#62c2ff" />
    </Canvas>
  );
};

export default SkiaWave;
