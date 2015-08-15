export default function(){
  this.transition(
    this.fromRoute('home'),
    this.toRoute('resume'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('home'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('resume'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
