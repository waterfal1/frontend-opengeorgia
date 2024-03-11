/* eslint-disable max-len */
import { FormikValues } from 'formik';

export function sendToMessenger(state: FormikValues) {
  const {
    name, phoneNumber, date, direction, communication, email,
  } = state;
  const token = '1897791283:AAHSkNNjSkxYEgJ-w7HibiuyuOFGUdJQP-g';
  const chatId = '-507101001';
  fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(`${phoneNumberText(phoneNumber)}\n${nameText(name)}\n${communicationWayText(communication, phoneNumber)}\n${directionText(direction)}\n${emailText(email)}\n${startDate(date)}`)}&parse_mode=html`)
    .then((response) => response.json());
}

function nameText(name: string) {
  return `<b>Имя: </b>${name}`;
}

function phoneNumberText(phoneNumber: string) {
  return `<b>Телефон: </b>${phoneNumber.replace(/_/g, '')}`;
}

function startDate(date: string) {
  return `<b>Дата экскурсий(гггг.мм.дд): </b>${date}`;
}

function emailText(email: string) {
  return `<b>Email: </b>${email}`;
}

function directionText(direction: string) {
  return `<b>Направление/экскурсия: </b>${direction}`;
}

function communicationWayText(communication: string, phoneNumber: string) {
  const tel = underScoreDel(phoneNumber);
  if (communication === 'WhatApp') {
    return `<b>Способ связи:</b> https://wa.me/${tel.slice(0, tel.length)}`;
  }
  return `<b>Способ связи: </b>${communication}`;
}

function underScoreDel(str: string): string {
  if (str.endsWith('_')) {
    str = str.slice(0, -1);
    return underScoreDel(str);
  }
  return str;
}
