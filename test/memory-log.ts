import { memorySink } from '@ideasquared/log';
import { createBotLog } from '../src/log.ts';

export const memoryLog = () => {
  const sink = memorySink();
  return { log: createBotLog(sink), events: sink.events };
};

export const lines = (events: ReadonlyArray<{ message: string; meta?: Record<string, unknown> }>) =>
  events.map(({ message, meta }) => (meta === undefined ? [message] : [message, meta]));

export const errors = (events: ReadonlyArray<{ level: string; message: string; error?: { message: string } }>) =>
  events.filter((event) => event.level === 'error').map((event) => [event.message, event.error?.message]);
