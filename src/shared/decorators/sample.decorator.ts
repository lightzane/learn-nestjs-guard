import { SetMetadata } from '@nestjs/common';

export const SampleMetadataKey = 'sample';
export const Sample = (...args: string[]) => SetMetadata(SampleMetadataKey, args); // generated by -- npx nest g decorator shared/decorators/sample
