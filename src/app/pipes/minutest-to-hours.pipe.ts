import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertMinutes',
    standalone: true,
})
export class ConvertMinutesPipe implements PipeTransform {
    transform(value: number): string {
        if (isNaN(value) || value < 0) {
            return 'Invalid input';
        }

        const hours = Math.floor(value / 60);
        const minutes = value % 60;
        return `${hours}h ${minutes}m`;
    }
}
