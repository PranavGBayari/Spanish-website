export interface WordOfTheDay {
  id: string;
  spanish_word: string;
  english_translation: string; // acts as both translation + definition
  pronunciation?: string;
  part_of_speech?: string;
  example_spanish?: string;
  example_english?: string;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  category?: string;
  etymology?: string;
  related_noun?: string;
  related_verb?: string;
  related_adjective?: string;
}
