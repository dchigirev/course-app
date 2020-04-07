export const markFormGroupTouched = (formGroup) => {
    (Object as any).values(formGroup.controls).forEach(control => {
        control.markAsTouched();

        if (control.controls) {
            markFormGroupTouched(control);
        }
    });
};
