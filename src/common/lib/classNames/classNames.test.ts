import { classNames } from '@classNames/classNames'


describe('classNames', () => {
  it('only first param', () => {
    expect(classNames('first-class')).toBe('first-class')
  })

  it('only mods: one', () => {
    expect(classNames('', { 'first-mod': true })).toBe('first-mod')
  })

  it('only mods: two', () => {
    expect(classNames('', { 'first-mod': true, 'second-mod': true })).toBe(
      'first-mod second-mod'
    )
  })

  it('only mods: more', () => {
    expect(
      classNames('', {
        'first-mod': true,
        'second-mod': true,
        'third-mod': true,
        'fourth-mod': true
      })
    ).toBe('first-mod second-mod third-mod fourth-mod')
  })

  it('only mods: with 1 false', () => {
    expect(
      classNames('', { 'first-mod': true, 'second-mod': false, 'third-mod': true })
    ).toBe('first-mod third-mod')
  })

  it('only mods: with 2 false', () => {
    expect(
      classNames('', { 'first-mod': true, 'second-mod': false, 'third-mod': false })
    ).toBe('first-mod')
  })

  it('only mods: with more false', () => {
    expect(
      classNames('', { 'first-mod': false, 'second-mod': false, 'third-mod': false })
    ).toBe('')
  })

  it('only additional: one', () => {
    expect(classNames('', {}, ['add-class'])).toBe('add-class')
  })

  it('only additional: two', () => {
    expect(classNames('', {}, ['add-class-1', 'add-class-2'])).toBe(
      'add-class-1 add-class-2'
    )
  })

  it('only additional: more', () => {
    expect(
      classNames('', {}, [
        'add-class-1',
        'add-class-2',
        'add-class-3',
        'add-class-4'
      ])
    ).toBe('add-class-1 add-class-2 add-class-3 add-class-4')
  })

  it('All in', () => {
    expect(
      classNames(
        'default-class',
        { 'first-mod': true, 'second-mod': true, 'third-mod': true },
        ['add-class-1', 'add-class-2', 'add-class-3']
      )
    ).toBe(
      'default-class first-mod second-mod third-mod add-class-1 add-class-2 add-class-3'
    )
  })
})
