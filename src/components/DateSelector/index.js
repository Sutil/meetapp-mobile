import React, { useState, useMemo, useEffect } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Label } from './styles';

export default function DateSelector({ onChange }) {
  const [date, setDate] = useState(new Date());
  const formattedDate = useMemo(() => {
    return format(date, "d 'de' MMMM", { locale: pt });
  }, [date]);

  useEffect(() => {
    onChange(date);
  }, [date]);

  function handleUp() {
    const newDate = addDays(date, 1);
    setDate(newDate);
  }

  function handleDown() {
    const newDate = subDays(date, 1);
    setDate(newDate);
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleDown}>
        <Icon name="keyboard-arrow-left" size={35} color="#fff" />
      </TouchableOpacity>
      <Label>{formattedDate}</Label>
      <TouchableOpacity onPress={handleUp}>
        <Icon name="keyboard-arrow-right" size={35} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
}
