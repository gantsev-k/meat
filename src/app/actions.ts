// @ts-nocheck
'use server';
import {
  enhanceProductDescription,
  type EnhanceProductDescriptionInput,
  type EnhanceProductDescriptionOutput,
} from '@/ai/flows/enhance-product-descriptions';

type ActionResult = EnhanceProductDescriptionOutput & {
  error?: string;
};

export async function enhanceDescriptionAction(input: EnhanceProductDescriptionInput): Promise<ActionResult> {
  try {
    const output = await enhanceProductDescription(input);
    if (!output || !output.enhancedDescription) {
      return { error: 'Failed to generate a new description. Please try again.', enhancedDescription: '' };
    }
    return output;
  } catch (e) {
    console.error('Error enhancing description:', e);
    // Return a structured error that the client can display
    return { error: 'An unexpected error occurred while enhancing the description.', enhancedDescription: '' };
  }
}
