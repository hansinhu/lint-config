module.exports = {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: [
      'react',
      'react-hooks',
    ],
    extends: [
      'plugin:react-hooks/recommended'
    ],
  
    // View link below for react rules documentation
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    rules: {
      // Specify whether double or single quotes should be used in JSX attributes
      // https://eslint.org/docs/rules/jsx-quotes
      'jsx-quotes': ['error', 'prefer-double'],
  
      // too strict, so set 'off'
      'class-methods-use-this': ['off', {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      }],
  
      // Prevent missing displayName in a React component definition
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
      'react/display-name': ['off', { ignoreTranspilerName: false }],
  
      // Forbid certain propTypes (any, array, object)
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
      'react/forbid-prop-types': ['warn', { forbid: ['any', 'array', 'object'] }],
  
      // Enforce boolean attributes notation in JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
      'react/jsx-boolean-value': ['error', 'never', { always: [] }],
  
      // Validate closing bracket location in JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
  
      // Validate closing tag location in JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
      // set off, beacuse this pattern will be warn, but can't be auto fixed(will lead to react/jsx-indent error)
      // rightItems.push(<span className="clickable-icon">
      //   <a href={`/${pathResource.path}/tags/${tag.name}/release/edit`}>
      //     <Icon type="edit" />
      //   </a>
      // </span>);
      'react/jsx-closing-tag-location': 'off',
  
      // Enforce or disallow spaces inside of curly braces in JSX attributes
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
      'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
  
      // Enforce event handler naming conventions in JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
      'react/jsx-handler-names': ['off', {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      }],
  
      // Validate props indentation in JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
      'react/jsx-indent-props': ['error', 2],
  
      // Validate JSX has key prop when in array or iterator
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
      'react/jsx-key': 'off',
  
      // Limit maximum of props on a single line in JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
      'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
  
      // Prevent usage of .bind() in JSX props
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
      'react/jsx-no-bind': ['warn', {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false,
      }],
  
      // Prevent duplicate props in JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
  
      // Prevent usage of unwrapped JSX strings
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
      'react/jsx-no-literals': ['off', { noStrings: true }],
  
      // Disallow undeclared variables in JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
      'react/jsx-no-undef': 'error',
  
      // Enforce PascalCase for user-defined JSX components
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
      'react/jsx-pascal-case': ['error', {
        allowAllCaps: true,
        ignore: [],
      }],
  
      // Enforce propTypes declarations alphabetical sorting
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
      'react/sort-prop-types': ['off', {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
      }],
  
      // Deprecated in favor of react/jsx-sort-props
      'react/jsx-sort-prop-types': 'off',
  
      // Enforce props alphabetical sorting
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
      'react/jsx-sort-props': ['off', {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      }],
  
      // Prevent React to be incorrectly marked as unused
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
      'react/jsx-uses-react': ['error'],
  
      // Prevent variables used in JSX to be incorrectly marked as unused
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
      'react/jsx-uses-vars': 'error',
  
      // Prevent usage of dangerous JSX properties
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
      'react/no-danger': 'warn',
  
      // Prevent usage of deprecated methods
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
      'react/no-deprecated': ['error'],
  
      // Prevent usage of setState in componentDidMount
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
      // this is necessary for server-rendering
      'react/no-did-mount-set-state': 'off',
  
      // Prevent usage of setState in componentDidUpdate
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
      'react/no-did-update-set-state': 'error',
  
      // Prevent usage of setState in componentWillUpdate
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
      'react/no-will-update-set-state': 'error',
  
      // Prevent direct mutation of this.state
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
      'react/no-direct-mutation-state': 'off',
  
      // Prevent usage of isMounted
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
      'react/no-is-mounted': 'error',
  
      // Prevent multiple component definition per file
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
      'react/no-multi-comp': ['error', { ignoreStateless: true }],
  
      // Prevent usage of setState
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
      'react/no-set-state': 'off',
  
      // Prevent using string references
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
      'react/no-string-refs': 'error',
  
      // Prevent usage of unknown DOM property
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
      'react/no-unknown-property': 'error',
  
      // Require ES6 class declarations over React.createClass
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
      'react/prefer-es6-class': ['error', 'always'],
  
      // Require stateless functions when not using lifecycle methods, setState or ref
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
      'react/prefer-stateless-function': 'off',
  
      // Prevent missing props validation in a React component definition
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
      'react/prop-types': ['off', {
        ignore: [],
        customValidators: [],
        skipUndeclared: false
      }],
  
      // Prevent missing React when using JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
      'react/react-in-jsx-scope': 'error',
  
      // Require render() methods to return something
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
      'react/require-render-return': 'error',
  
      // Prevent extra closing tags for components without children
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
      'react/self-closing-comp': 'error',
  
      // Enforce component methods order
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
      'react/sort-comp': ['error', {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ],
          rendering: [
            '/^render.+$/',
            'render'
          ],
        },
      }],
  
      // Prevent missing parentheses around multilines JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
      'react/jsx-wrap-multilines': ['error', {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      }],
  
      // Require that the first prop in a JSX element be on a new line when the element is multiline
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  
      // Enforce spacing around jsx equals signs
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
      'react/jsx-equals-spacing': ['error', 'never'],
  
      // Enforce JSX indentation
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
      'react/jsx-indent': ['error', 2],
  
      // Disallow target="_blank" on links
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
      'react/jsx-no-target-blank': 'warn',
  
      // only .jsx files may have JSX
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.js'] }],
  
      // prevent accidental JS comments from being injected into JSX as text
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
      'react/jsx-no-comment-textnodes': 'error',
  
      // disallow using React.render/ReactDOM.render's return value
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
      'react/no-render-return-value': 'error',
  
      // require a shouldComponentUpdate method, or PureRenderMixin
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
      'react/require-optimization': ['off', { allowDecorators: [] }],
  
      // warn against using findDOMNode()
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
      'react/no-find-dom-node': 'error',
  
      // Forbid certain props on Components
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
      'react/forbid-component-props': ['off', { forbid: [] }],
  
      // Forbid certain elements
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
      'react/forbid-elements': ['off', { forbid: [], }],
  
      // Prevent problem with children and props.dangerouslySetInnerHTML
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
      'react/no-danger-with-children': 'error',
  
      // Prevent unused propType definitions
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
      'react/no-unused-prop-types': ['error', {
        customValidators: [
        ],
        skipShapeProps: true,
      }],
  
      // Require style prop value be an object or var
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
      'react/style-prop-object': 'error',
  
      // Prevent invalid characters from appearing in markup
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
      'react/no-unescaped-entities': 'error',
  
      // Prevent passing of children as props
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
      'react/no-children-prop': 'error',
  
      // Validate whitespace in and around the JSX opening and closing brackets
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
      'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never'
      }],
  
      // Enforce spaces before the closing bracket of self-closing JSX elements
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
      // Deprecated in favor of jsx-tag-spacing
      'react/jsx-space-before-closing': ['off', 'always'],
  
      // Prevent usage of Array index in keys
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
      'react/no-array-index-key': 'warn',
  
      // Enforce a defaultProps definition for every prop that is not a required prop
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
      'react/require-default-props': 'off',
  
      // Forbids using non-exported propTypes
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
      'react/forbid-foreign-prop-types': 'off',
  
      // Prevent void DOM elements from receiving children
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
      'react/void-dom-elements-no-children': 'error',
  
      // Enforce all defaultProps have a corresponding non-required PropType
      // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/default-props-match-prop-types.md
      'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
  
      // Prevent usage of shouldComponentUpdate when extending React.PureComponent
      // https://github.com/yannickcr/eslint-plugin-react/blob/9e13ae2c51e44872b45cc15bf1ac3a72105bdd0e/docs/rules/no-redundant-should-component-update.md
      'react/no-redundant-should-component-update': 'error',
  
      // Prevent unused state values
      // https://github.com/yannickcr/eslint-plugin-react/pull/1103/
      'react/no-unused-state': 'error',
  
      // Enforces consistent naming for boolean props
      // https://github.com/yannickcr/eslint-plugin-react/blob/73abadb697034b5ccb514d79fb4689836fe61f91/docs/rules/boolean-prop-naming.md
      // TODO 命名规范确定后可开启
      // 'react/boolean-prop-naming': ['off', {
      //   propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      //   rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      // }],
      'react/boolean-prop-naming': 'off',
  
      // Prevents common casing typos
      // https://github.com/yannickcr/eslint-plugin-react/blob/73abadb697034b5ccb514d79fb4689836fe61f91/docs/rules/no-typos.md
      'react/no-typos': 'error',
  
      // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
      // TODO 不知fix时有无bug问题，先不开启
      // 'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }]
      'react/jsx-curly-brace-presence': 'off'
    },
  
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.json']
        }
      },
      react: {
        pragma: 'React',
        version: '16.0'
      },
      propWrapperFunctions: [
        'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
        'exact', // https://www.npmjs.com/package/prop-types-exact
        'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
      ],
    }
  };
  