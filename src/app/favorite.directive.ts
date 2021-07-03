import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[mwFavorite]'
})
export class FavoriteDirective {
    // HostBinding is used to bind a host element property to directive property.
    @HostBinding('class.is-favorite') isFavorite = true;
    @Input() set mwFavorite(value) {
        this.isFavorite = value;
    }
}