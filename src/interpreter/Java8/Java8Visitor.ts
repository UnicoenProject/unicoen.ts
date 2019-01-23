// Generated from C:\develop\UniMapperGeneratorForTS\net.unicoen\..\UniMapperGenerator\src-gen\Java8.g4 by ANTLR 4.6-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { TranslationunitContext } from './Java8Parser';
import { LiteralContext } from './Java8Parser';
import { IntegerLiteralContext } from './Java8Parser';
import { FloatingPointLiteralContext } from './Java8Parser';
import { BooleanLiteralContext } from './Java8Parser';
import { StringLiteralContext } from './Java8Parser';
import { CharacterLiteralContext } from './Java8Parser';
import { NullLiteralContext } from './Java8Parser';
import { TypeContext } from './Java8Parser';
import { PrimitiveTypeContext } from './Java8Parser';
import { NumericTypeContext } from './Java8Parser';
import { IntegralTypeContext } from './Java8Parser';
import { FloatingPointTypeContext } from './Java8Parser';
import { ReferenceTypeContext } from './Java8Parser';
import { ClassOrInterfaceTypeContext } from './Java8Parser';
import { ClassTypeContext } from './Java8Parser';
import { ClassType_lf_classOrInterfaceTypeContext } from './Java8Parser';
import { ClassType_lfno_classOrInterfaceTypeContext } from './Java8Parser';
import { InterfaceTypeContext } from './Java8Parser';
import { InterfaceType_lf_classOrInterfaceTypeContext } from './Java8Parser';
import { InterfaceType_lfno_classOrInterfaceTypeContext } from './Java8Parser';
import { TypeVariableContext } from './Java8Parser';
import { ArrayTypeContext } from './Java8Parser';
import { DimsContext } from './Java8Parser';
import { TypeParameterContext } from './Java8Parser';
import { TypeParameterModifierContext } from './Java8Parser';
import { TypeBoundContext } from './Java8Parser';
import { AdditionalBoundContext } from './Java8Parser';
import { TypeArgumentsContext } from './Java8Parser';
import { TypeArgumentListContext } from './Java8Parser';
import { TypeArgumentContext } from './Java8Parser';
import { WildcardContext } from './Java8Parser';
import { WildcardBoundsContext } from './Java8Parser';
import { PackageNameContext } from './Java8Parser';
import { TypeNameContext } from './Java8Parser';
import { TypeNameIdentContext } from './Java8Parser';
import { PackageOrTypeNameContext } from './Java8Parser';
import { ExpressionNameContext } from './Java8Parser';
import { AmbiguousNameContext } from './Java8Parser';
import { CompilationUnitContext } from './Java8Parser';
import { PackageDeclarationContext } from './Java8Parser';
import { PackageModifierContext } from './Java8Parser';
import { ImportDeclarationContext } from './Java8Parser';
import { SingleTypeImportDeclarationContext } from './Java8Parser';
import { TypeImportOnDemandDeclarationContext } from './Java8Parser';
import { SingleStaticImportDeclarationContext } from './Java8Parser';
import { StaticImportOnDemandDeclarationContext } from './Java8Parser';
import { TypeDeclarationContext } from './Java8Parser';
import { ClassDeclarationContext } from './Java8Parser';
import { NormalClassDeclarationContext } from './Java8Parser';
import { ClassNameContext } from './Java8Parser';
import { ClassModifiersContext } from './Java8Parser';
import { ClassModifierContext } from './Java8Parser';
import { TypeParametersContext } from './Java8Parser';
import { TypeParameterListContext } from './Java8Parser';
import { SuperclassContext } from './Java8Parser';
import { SuperinterfacesContext } from './Java8Parser';
import { InterfaceTypeListContext } from './Java8Parser';
import { ClassBodyContext } from './Java8Parser';
import { ClassBodyDeclarationContext } from './Java8Parser';
import { ClassMemberDeclarationContext } from './Java8Parser';
import { FieldDeclarationContext } from './Java8Parser';
import { FieldModifiersContext } from './Java8Parser';
import { FieldModifierContext } from './Java8Parser';
import { VariableDeclaratorListContext } from './Java8Parser';
import { VariableDeclaratorContext } from './Java8Parser';
import { VariableDeclaratorIdContext } from './Java8Parser';
import { VariableInitializerContext } from './Java8Parser';
import { UnannTypeContext } from './Java8Parser';
import { UnannPrimitiveTypeContext } from './Java8Parser';
import { UnannReferenceTypeContext } from './Java8Parser';
import { UnannClassOrInterfaceTypeContext } from './Java8Parser';
import { UnannClassTypeContext } from './Java8Parser';
import { UnannClassType_lf_unannClassOrInterfaceTypeContext } from './Java8Parser';
import { UnannClassType_lfno_unannClassOrInterfaceTypeContext } from './Java8Parser';
import { UnannInterfaceTypeContext } from './Java8Parser';
import { UnannInterfaceType_lf_unannClassOrInterfaceTypeContext } from './Java8Parser';
import { UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext } from './Java8Parser';
import { UnannTypeVariableContext } from './Java8Parser';
import { UnannArrayTypeContext } from './Java8Parser';
import { MethodDeclarationContext } from './Java8Parser';
import { MethodModifierContext } from './Java8Parser';
import { MethodHeaderContext } from './Java8Parser';
import { ResultContext } from './Java8Parser';
import { MethodDeclaratorContext } from './Java8Parser';
import { MethodNameContext } from './Java8Parser';
import { FormalParameterListContext } from './Java8Parser';
import { FormalParametersContext } from './Java8Parser';
import { FormalParameterContext } from './Java8Parser';
import { ParameterDeclaratorIdsContext } from './Java8Parser';
import { ParameterDeclaratorIdContext } from './Java8Parser';
import { ParameterNameContext } from './Java8Parser';
import { VariableModifierContext } from './Java8Parser';
import { LastFormalParameterContext } from './Java8Parser';
import { ReceiverParameterContext } from './Java8Parser';
import { Throws_Context } from './Java8Parser';
import { ExceptionTypeListContext } from './Java8Parser';
import { ExceptionTypeContext } from './Java8Parser';
import { MethodBodyContext } from './Java8Parser';
import { InstanceInitializerContext } from './Java8Parser';
import { StaticInitializerContext } from './Java8Parser';
import { ConstructorDeclarationContext } from './Java8Parser';
import { ConstructorModifierContext } from './Java8Parser';
import { ConstructorDeclaratorContext } from './Java8Parser';
import { SimpleTypeNameContext } from './Java8Parser';
import { ConstructorBodyContext } from './Java8Parser';
import { ExplicitConstructorInvocationContext } from './Java8Parser';
import { EnumDeclarationContext } from './Java8Parser';
import { EnumBodyContext } from './Java8Parser';
import { EnumConstantListContext } from './Java8Parser';
import { EnumConstantContext } from './Java8Parser';
import { EnumConstantModifierContext } from './Java8Parser';
import { EnumBodyDeclarationsContext } from './Java8Parser';
import { InterfaceDeclarationContext } from './Java8Parser';
import { NormalInterfaceDeclarationContext } from './Java8Parser';
import { InterfaceModifiersContext } from './Java8Parser';
import { InterfaceNameContext } from './Java8Parser';
import { InterfaceModifierContext } from './Java8Parser';
import { ExtendsInterfacesContext } from './Java8Parser';
import { InterfaceBodyContext } from './Java8Parser';
import { InterfaceMemberDeclarationContext } from './Java8Parser';
import { ConstantDeclarationContext } from './Java8Parser';
import { ConstantModifiersContext } from './Java8Parser';
import { ConstantModifierContext } from './Java8Parser';
import { InterfaceMethodDeclarationContext } from './Java8Parser';
import { InterfaceMethodModifiersContext } from './Java8Parser';
import { InterfaceMethodModifierContext } from './Java8Parser';
import { AnnotationTypeDeclarationContext } from './Java8Parser';
import { AnnotationTypeBodyContext } from './Java8Parser';
import { AnnotationTypeMemberDeclarationContext } from './Java8Parser';
import { AnnotationTypeElementDeclarationContext } from './Java8Parser';
import { AnnotationTypeElementModifierContext } from './Java8Parser';
import { DefaultValueContext } from './Java8Parser';
import { AnnotationContext } from './Java8Parser';
import { NormalAnnotationContext } from './Java8Parser';
import { ElementValuePairListContext } from './Java8Parser';
import { ElementValuePairContext } from './Java8Parser';
import { ElementValueContext } from './Java8Parser';
import { ElementValueArrayInitializerContext } from './Java8Parser';
import { ElementValueListContext } from './Java8Parser';
import { MarkerAnnotationContext } from './Java8Parser';
import { SingleElementAnnotationContext } from './Java8Parser';
import { ArrayInitializerContext } from './Java8Parser';
import { VariableInitializerListContext } from './Java8Parser';
import { BlockContext } from './Java8Parser';
import { BlockStatementsContext } from './Java8Parser';
import { BlockStatementContext } from './Java8Parser';
import { LocalVariableDeclarationStatementContext } from './Java8Parser';
import { LocalVariableDeclarationContext } from './Java8Parser';
import { StatementContext } from './Java8Parser';
import { StatementNoShortIfContext } from './Java8Parser';
import { StatementWithoutTrailingSubstatementContext } from './Java8Parser';
import { EmptyStatementContext } from './Java8Parser';
import { LabeledStatementContext } from './Java8Parser';
import { LabeledStatementNoShortIfContext } from './Java8Parser';
import { ExpressionStatementContext } from './Java8Parser';
import { StatementExpressionContext } from './Java8Parser';
import { IfThenStatementContext } from './Java8Parser';
import { IfThenElseStatementContext } from './Java8Parser';
import { IfThenElseStatementNoShortIfContext } from './Java8Parser';
import { AssertStatementContext } from './Java8Parser';
import { SwitchStatementContext } from './Java8Parser';
import { SwitchBlockContext } from './Java8Parser';
import { SwitchBlockStatementGroupContext } from './Java8Parser';
import { SwitchLabelsContext } from './Java8Parser';
import { SwitchLabelContext } from './Java8Parser';
import { EnumConstantNameContext } from './Java8Parser';
import { WhileStatementContext } from './Java8Parser';
import { WhileStatementNoShortIfContext } from './Java8Parser';
import { DoStatementContext } from './Java8Parser';
import { ForStatementContext } from './Java8Parser';
import { ForStatementNoShortIfContext } from './Java8Parser';
import { BasicForStatementContext } from './Java8Parser';
import { BasicForStatementNoShortIfContext } from './Java8Parser';
import { ForInitContext } from './Java8Parser';
import { ForUpdateContext } from './Java8Parser';
import { StatementExpressionListContext } from './Java8Parser';
import { EnhancedForStatementContext } from './Java8Parser';
import { EnhancedForStatementNoShortIfContext } from './Java8Parser';
import { BreakStatementContext } from './Java8Parser';
import { ContinueStatementContext } from './Java8Parser';
import { ReturnStatementContext } from './Java8Parser';
import { ThrowStatementContext } from './Java8Parser';
import { SynchronizedStatementContext } from './Java8Parser';
import { TryStatementContext } from './Java8Parser';
import { CatchesContext } from './Java8Parser';
import { CatchClauseContext } from './Java8Parser';
import { CatchFormalParameterContext } from './Java8Parser';
import { CatchTypeContext } from './Java8Parser';
import { Finally_Context } from './Java8Parser';
import { TryWithResourcesStatementContext } from './Java8Parser';
import { ResourceSpecificationContext } from './Java8Parser';
import { ResourceListContext } from './Java8Parser';
import { ResourceContext } from './Java8Parser';
import { PrimaryContext } from './Java8Parser';
import { PrimaryNoNewArrayContext } from './Java8Parser';
import { PrimaryNoNewArray_lf_arrayAccessContext } from './Java8Parser';
import { PrimaryNoNewArray_lfno_arrayAccessContext } from './Java8Parser';
import { PrimaryNoNewArray_lf_primaryContext } from './Java8Parser';
import { PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext } from './Java8Parser';
import { PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext } from './Java8Parser';
import { PrimaryNoNewArray_lfno_primaryContext } from './Java8Parser';
import { PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext } from './Java8Parser';
import { PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext } from './Java8Parser';
import { ClassInstanceCreationExpressionContext } from './Java8Parser';
import { ClassInstanceCreationExpression_lf_primaryContext } from './Java8Parser';
import { ClassInstanceCreationExpression_lfno_primaryContext } from './Java8Parser';
import { TypeArgumentsOrDiamondContext } from './Java8Parser';
import { FieldAccessContext } from './Java8Parser';
import { FieldAccess_lf_primaryContext } from './Java8Parser';
import { FieldAccess_lfno_primaryContext } from './Java8Parser';
import { ArrayAccessContext } from './Java8Parser';
import { ArrayAccess_lf_primaryContext } from './Java8Parser';
import { ArrayAccess_lfno_primaryContext } from './Java8Parser';
import { MethodInvocationContext } from './Java8Parser';
import { ReceiversContext } from './Java8Parser';
import { ReceiverContext } from './Java8Parser';
import { IdentContext } from './Java8Parser';
import { MethodInvocation_lf_primaryContext } from './Java8Parser';
import { MethodInvocation_lfno_primaryContext } from './Java8Parser';
import { ArgumentListContext } from './Java8Parser';
import { MethodReferenceContext } from './Java8Parser';
import { MethodReference_lf_primaryContext } from './Java8Parser';
import { MethodReference_lfno_primaryContext } from './Java8Parser';
import { ArrayCreationExpressionContext } from './Java8Parser';
import { DimExprsContext } from './Java8Parser';
import { DimExprContext } from './Java8Parser';
import { ConstantExpressionContext } from './Java8Parser';
import { ExpressionContext } from './Java8Parser';
import { LambdaExpressionContext } from './Java8Parser';
import { LambdaParametersContext } from './Java8Parser';
import { InferredFormalParameterListContext } from './Java8Parser';
import { LambdaBodyContext } from './Java8Parser';
import { AssignmentExpressionContext } from './Java8Parser';
import { AssignmentContext } from './Java8Parser';
import { LeftHandSideContext } from './Java8Parser';
import { AssignmentOperatorContext } from './Java8Parser';
import { ConditionalExpressionContext } from './Java8Parser';
import { OrContext } from './Java8Parser';
import { ConditionalOrExpressionContext } from './Java8Parser';
import { AndContext } from './Java8Parser';
import { ConditionalAndExpressionContext } from './Java8Parser';
import { BitorContext } from './Java8Parser';
import { InclusiveOrExpressionContext } from './Java8Parser';
import { CaretContext } from './Java8Parser';
import { ExclusiveOrExpressionContext } from './Java8Parser';
import { BitandContext } from './Java8Parser';
import { AndExpressionContext } from './Java8Parser';
import { EqualContext } from './Java8Parser';
import { NotequalContext } from './Java8Parser';
import { EqualityExpressionContext } from './Java8Parser';
import { LtContext } from './Java8Parser';
import { GtContext } from './Java8Parser';
import { LeContext } from './Java8Parser';
import { GeContext } from './Java8Parser';
import { InstanceofContext } from './Java8Parser';
import { RelationalExpressionContext } from './Java8Parser';
import { LtltContext } from './Java8Parser';
import { GtgtContext } from './Java8Parser';
import { GtgtgtContext } from './Java8Parser';
import { ShiftExpressionContext } from './Java8Parser';
import { AdditiveExpressionContext } from './Java8Parser';
import { MulContext } from './Java8Parser';
import { DivContext } from './Java8Parser';
import { ModContext } from './Java8Parser';
import { MultiplicativeExpressionContext } from './Java8Parser';
import { AddContext } from './Java8Parser';
import { SubContext } from './Java8Parser';
import { UnaryExpressionContext } from './Java8Parser';
import { IncContext } from './Java8Parser';
import { PreIncrementExpressionContext } from './Java8Parser';
import { DecContext } from './Java8Parser';
import { PreDecrementExpressionContext } from './Java8Parser';
import { TildeContext } from './Java8Parser';
import { BangContext } from './Java8Parser';
import { UnaryExpressionNotPlusMinusContext } from './Java8Parser';
import { PostfixExpressionContext } from './Java8Parser';
import { PostIncrementExpressionContext } from './Java8Parser';
import { PostIncrementExpression_lf_postfixExpressionContext } from './Java8Parser';
import { PostDecrementExpressionContext } from './Java8Parser';
import { PostDecrementExpression_lf_postfixExpressionContext } from './Java8Parser';
import { CastExpressionContext } from './Java8Parser';

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Java8Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Java8Visitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by `Java8Parser.translationunit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTranslationunit?: (ctx: TranslationunitContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLiteral?: (ctx: LiteralContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.integerLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.floatingPointLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFloatingPointLiteral?: (ctx: FloatingPointLiteralContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.booleanLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.stringLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStringLiteral?: (ctx: StringLiteralContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.characterLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCharacterLiteral?: (ctx: CharacterLiteralContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.nullLiteral`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNullLiteral?: (ctx: NullLiteralContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitType?: (ctx: TypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primitiveType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.numericType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNumericType?: (ctx: NumericTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.integralType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIntegralType?: (ctx: IntegralTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.floatingPointType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFloatingPointType?: (ctx: FloatingPointTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.referenceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReferenceType?: (ctx: ReferenceTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassType?: (ctx: ClassTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classType_lf_classOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassType_lf_classOrInterfaceType?: (
    ctx: ClassType_lf_classOrInterfaceTypeContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classType_lfno_classOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassType_lfno_classOrInterfaceType?: (
    ctx: ClassType_lfno_classOrInterfaceTypeContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceType?: (ctx: InterfaceTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceType_lf_classOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceType_lf_classOrInterfaceType?: (
    ctx: InterfaceType_lf_classOrInterfaceTypeContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceType_lfno_classOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceType_lfno_classOrInterfaceType?: (
    ctx: InterfaceType_lfno_classOrInterfaceTypeContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeVariable`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeVariable?: (ctx: TypeVariableContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.arrayType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayType?: (ctx: ArrayTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.dims`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDims?: (ctx: DimsContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeParameter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeParameter?: (ctx: TypeParameterContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeParameterModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeParameterModifier?: (ctx: TypeParameterModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeBound`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeBound?: (ctx: TypeBoundContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.additionalBound`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditionalBound?: (ctx: AdditionalBoundContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeArguments`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeArgumentList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeArgumentList?: (ctx: TypeArgumentListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeArgument`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeArgument?: (ctx: TypeArgumentContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.wildcard`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWildcard?: (ctx: WildcardContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.wildcardBounds`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWildcardBounds?: (ctx: WildcardBoundsContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.packageName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPackageName?: (ctx: PackageNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeName?: (ctx: TypeNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeNameIdent`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeNameIdent?: (ctx: TypeNameIdentContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.packageOrTypeName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.expressionName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionName?: (ctx: ExpressionNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.ambiguousName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAmbiguousName?: (ctx: AmbiguousNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.compilationUnit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.packageDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.packageModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPackageModifier?: (ctx: PackageModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.importDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.singleTypeImportDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSingleTypeImportDeclaration?: (ctx: SingleTypeImportDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeImportOnDemandDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeImportOnDemandDeclaration?: (ctx: TypeImportOnDemandDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.singleStaticImportDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSingleStaticImportDeclaration?: (ctx: SingleStaticImportDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.staticImportOnDemandDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStaticImportOnDemandDeclaration?: (ctx: StaticImportOnDemandDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.normalClassDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.className`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassName?: (ctx: ClassNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classModifiers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassModifiers?: (ctx: ClassModifiersContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassModifier?: (ctx: ClassModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeParameters`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeParameters?: (ctx: TypeParametersContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeParameterList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeParameterList?: (ctx: TypeParameterListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.superclass`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSuperclass?: (ctx: SuperclassContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.superinterfaces`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSuperinterfaces?: (ctx: SuperinterfacesContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceTypeList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceTypeList?: (ctx: InterfaceTypeListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassBody?: (ctx: ClassBodyContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classBodyDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classMemberDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.fieldDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.fieldModifiers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFieldModifiers?: (ctx: FieldModifiersContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.fieldModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFieldModifier?: (ctx: FieldModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.variableDeclaratorList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariableDeclaratorList?: (ctx: VariableDeclaratorListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.variableDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.variableDeclaratorId`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.variableInitializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannType?: (ctx: UnannTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannPrimitiveType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannPrimitiveType?: (ctx: UnannPrimitiveTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannReferenceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannReferenceType?: (ctx: UnannReferenceTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannClassOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannClassOrInterfaceType?: (ctx: UnannClassOrInterfaceTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannClassType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannClassType?: (ctx: UnannClassTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannClassType_lf_unannClassOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannClassType_lf_unannClassOrInterfaceType?: (
    ctx: UnannClassType_lf_unannClassOrInterfaceTypeContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannClassType_lfno_unannClassOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannClassType_lfno_unannClassOrInterfaceType?: (
    ctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannInterfaceType?: (ctx: UnannInterfaceTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannInterfaceType_lf_unannClassOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannInterfaceType_lf_unannClassOrInterfaceType?: (
    ctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannInterfaceType_lfno_unannClassOrInterfaceType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannInterfaceType_lfno_unannClassOrInterfaceType?: (
    ctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannTypeVariable`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannTypeVariable?: (ctx: UnannTypeVariableContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unannArrayType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnannArrayType?: (ctx: UnannArrayTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodModifier?: (ctx: MethodModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodHeader`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodHeader?: (ctx: MethodHeaderContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.result`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitResult?: (ctx: ResultContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodDeclarator?: (ctx: MethodDeclaratorContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodName?: (ctx: MethodNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.formalParameterList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.formalParameters`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFormalParameters?: (ctx: FormalParametersContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.formalParameter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFormalParameter?: (ctx: FormalParameterContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.parameterDeclaratorIds`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterDeclaratorIds?: (ctx: ParameterDeclaratorIdsContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.parameterDeclaratorId`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterDeclaratorId?: (ctx: ParameterDeclaratorIdContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.parameterName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterName?: (ctx: ParameterNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.variableModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariableModifier?: (ctx: VariableModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.lastFormalParameter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLastFormalParameter?: (ctx: LastFormalParameterContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.receiverParameter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReceiverParameter?: (ctx: ReceiverParameterContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.throws_`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitThrows_?: (ctx: Throws_Context) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.exceptionTypeList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExceptionTypeList?: (ctx: ExceptionTypeListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.exceptionType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExceptionType?: (ctx: ExceptionTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodBody?: (ctx: MethodBodyContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.instanceInitializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInstanceInitializer?: (ctx: InstanceInitializerContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.staticInitializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStaticInitializer?: (ctx: StaticInitializerContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.constructorDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.constructorModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstructorModifier?: (ctx: ConstructorModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.constructorDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstructorDeclarator?: (ctx: ConstructorDeclaratorContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.simpleTypeName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSimpleTypeName?: (ctx: SimpleTypeNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.constructorBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstructorBody?: (ctx: ConstructorBodyContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.explicitConstructorInvocation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.enumDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.enumBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumBody?: (ctx: EnumBodyContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.enumConstantList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumConstantList?: (ctx: EnumConstantListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.enumConstant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumConstant?: (ctx: EnumConstantContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.enumConstantModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumConstantModifier?: (ctx: EnumConstantModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.enumBodyDeclarations`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.normalInterfaceDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceModifiers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceModifiers?: (ctx: InterfaceModifiersContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceName?: (ctx: InterfaceNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceModifier?: (ctx: InterfaceModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.extendsInterfaces`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExtendsInterfaces?: (ctx: ExtendsInterfacesContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceMemberDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.constantDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantDeclaration?: (ctx: ConstantDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.constantModifiers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantModifiers?: (ctx: ConstantModifiersContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.constantModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantModifier?: (ctx: ConstantModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceMethodDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceMethodModifiers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceMethodModifiers?: (ctx: InterfaceMethodModifiersContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.interfaceMethodModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.annotationTypeDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.annotationTypeBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.annotationTypeMemberDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnnotationTypeMemberDeclaration?: (ctx: AnnotationTypeMemberDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.annotationTypeElementDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.annotationTypeElementModifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnnotationTypeElementModifier?: (ctx: AnnotationTypeElementModifierContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.defaultValue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDefaultValue?: (ctx: DefaultValueContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.annotation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnnotation?: (ctx: AnnotationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.normalAnnotation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNormalAnnotation?: (ctx: NormalAnnotationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.elementValuePairList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitElementValuePairList?: (ctx: ElementValuePairListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.elementValuePair`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.elementValue`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitElementValue?: (ctx: ElementValueContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.elementValueArrayInitializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.elementValueList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitElementValueList?: (ctx: ElementValueListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.markerAnnotation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMarkerAnnotation?: (ctx: MarkerAnnotationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.singleElementAnnotation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSingleElementAnnotation?: (ctx: SingleElementAnnotationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.arrayInitializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.variableInitializerList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariableInitializerList?: (ctx: VariableInitializerListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.block`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlock?: (ctx: BlockContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.blockStatements`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockStatements?: (ctx: BlockStatementsContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.blockStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockStatement?: (ctx: BlockStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.localVariableDeclarationStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLocalVariableDeclarationStatement?: (
    ctx: LocalVariableDeclarationStatementContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.localVariableDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.statementNoShortIf`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementNoShortIf?: (ctx: StatementNoShortIfContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.statementWithoutTrailingSubstatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementWithoutTrailingSubstatement?: (
    ctx: StatementWithoutTrailingSubstatementContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.emptyStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.labeledStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLabeledStatement?: (ctx: LabeledStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.labeledStatementNoShortIf`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLabeledStatementNoShortIf?: (ctx: LabeledStatementNoShortIfContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.expressionStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.statementExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementExpression?: (ctx: StatementExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.ifThenStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfThenStatement?: (ctx: IfThenStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.ifThenElseStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfThenElseStatement?: (ctx: IfThenElseStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.ifThenElseStatementNoShortIf`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIfThenElseStatementNoShortIf?: (ctx: IfThenElseStatementNoShortIfContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.assertStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssertStatement?: (ctx: AssertStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.switchStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.switchBlock`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitchBlock?: (ctx: SwitchBlockContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.switchBlockStatementGroup`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.switchLabels`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitchLabels?: (ctx: SwitchLabelsContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.switchLabel`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.enumConstantName`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnumConstantName?: (ctx: EnumConstantNameContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.whileStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhileStatement?: (ctx: WhileStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.whileStatementNoShortIf`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhileStatementNoShortIf?: (ctx: WhileStatementNoShortIfContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.doStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDoStatement?: (ctx: DoStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.forStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForStatement?: (ctx: ForStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.forStatementNoShortIf`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForStatementNoShortIf?: (ctx: ForStatementNoShortIfContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.basicForStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBasicForStatement?: (ctx: BasicForStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.basicForStatementNoShortIf`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBasicForStatementNoShortIf?: (ctx: BasicForStatementNoShortIfContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.forInit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForInit?: (ctx: ForInitContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.forUpdate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitForUpdate?: (ctx: ForUpdateContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.statementExpressionList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatementExpressionList?: (ctx: StatementExpressionListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.enhancedForStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnhancedForStatement?: (ctx: EnhancedForStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.enhancedForStatementNoShortIf`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEnhancedForStatementNoShortIf?: (ctx: EnhancedForStatementNoShortIfContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.breakStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBreakStatement?: (ctx: BreakStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.continueStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.returnStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.throwStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.synchronizedStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSynchronizedStatement?: (ctx: SynchronizedStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.tryStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTryStatement?: (ctx: TryStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.catches`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCatches?: (ctx: CatchesContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.catchClause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCatchClause?: (ctx: CatchClauseContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.catchFormalParameter`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCatchFormalParameter?: (ctx: CatchFormalParameterContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.catchType`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCatchType?: (ctx: CatchTypeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.finally_`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFinally_?: (ctx: Finally_Context) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.tryWithResourcesStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTryWithResourcesStatement?: (ctx: TryWithResourcesStatementContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.resourceSpecification`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.resourceList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitResourceList?: (ctx: ResourceListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.resource`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitResource?: (ctx: ResourceContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimary?: (ctx: PrimaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primaryNoNewArray`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryNoNewArray?: (ctx: PrimaryNoNewArrayContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primaryNoNewArray_lf_arrayAccess`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryNoNewArray_lf_arrayAccess?: (ctx: PrimaryNoNewArray_lf_arrayAccessContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_arrayAccess`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryNoNewArray_lfno_arrayAccess?: (
    ctx: PrimaryNoNewArray_lfno_arrayAccessContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primaryNoNewArray_lf_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryNoNewArray_lf_primary?: (ctx: PrimaryNoNewArray_lf_primaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary?: (
    ctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary?: (
    ctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryNoNewArray_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary?: (
    ctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary?: (
    ctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classInstanceCreationExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassInstanceCreationExpression?: (ctx: ClassInstanceCreationExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classInstanceCreationExpression_lf_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassInstanceCreationExpression_lf_primary?: (
    ctx: ClassInstanceCreationExpression_lf_primaryContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.classInstanceCreationExpression_lfno_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitClassInstanceCreationExpression_lfno_primary?: (
    ctx: ClassInstanceCreationExpression_lfno_primaryContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.typeArgumentsOrDiamond`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.fieldAccess`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFieldAccess?: (ctx: FieldAccessContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.fieldAccess_lf_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFieldAccess_lf_primary?: (ctx: FieldAccess_lf_primaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.fieldAccess_lfno_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFieldAccess_lfno_primary?: (ctx: FieldAccess_lfno_primaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.arrayAccess`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayAccess?: (ctx: ArrayAccessContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.arrayAccess_lf_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayAccess_lf_primary?: (ctx: ArrayAccess_lf_primaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.arrayAccess_lfno_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayAccess_lfno_primary?: (ctx: ArrayAccess_lfno_primaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodInvocation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodInvocation?: (ctx: MethodInvocationContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.receivers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReceivers?: (ctx: ReceiversContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.receiver`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitReceiver?: (ctx: ReceiverContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.ident`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdent?: (ctx: IdentContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodInvocation_lf_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodInvocation_lf_primary?: (ctx: MethodInvocation_lf_primaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodInvocation_lfno_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodInvocation_lfno_primary?: (ctx: MethodInvocation_lfno_primaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.argumentList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgumentList?: (ctx: ArgumentListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodReference`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodReference?: (ctx: MethodReferenceContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodReference_lf_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodReference_lf_primary?: (ctx: MethodReference_lf_primaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.methodReference_lfno_primary`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMethodReference_lfno_primary?: (ctx: MethodReference_lfno_primaryContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.arrayCreationExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.dimExprs`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDimExprs?: (ctx: DimExprsContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.dimExpr`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDimExpr?: (ctx: DimExprContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.constantExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.lambdaExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.lambdaParameters`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLambdaParameters?: (ctx: LambdaParametersContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.inferredFormalParameterList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInferredFormalParameterList?: (ctx: InferredFormalParameterListContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.lambdaBody`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLambdaBody?: (ctx: LambdaBodyContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.assignmentExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.assignment`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignment?: (ctx: AssignmentContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.leftHandSide`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLeftHandSide?: (ctx: LeftHandSideContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.assignmentOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.conditionalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.or`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOr?: (ctx: OrContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.conditionalOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.and`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnd?: (ctx: AndContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.conditionalAndExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.bitor`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBitor?: (ctx: BitorContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.inclusiveOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.caret`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCaret?: (ctx: CaretContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.exclusiveOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.bitand`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBitand?: (ctx: BitandContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.andExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAndExpression?: (ctx: AndExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.equal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqual?: (ctx: EqualContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.notequal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNotequal?: (ctx: NotequalContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.equalityExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.lt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLt?: (ctx: LtContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.gt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGt?: (ctx: GtContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.le`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLe?: (ctx: LeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.ge`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGe?: (ctx: GeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.instanceof`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInstanceof?: (ctx: InstanceofContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.relationalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.ltlt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLtlt?: (ctx: LtltContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.gtgt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGtgt?: (ctx: GtgtContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.gtgtgt`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGtgtgt?: (ctx: GtgtgtContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.shiftExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.additiveExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.mul`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMul?: (ctx: MulContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.div`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDiv?: (ctx: DivContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.mod`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMod?: (ctx: ModContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.multiplicativeExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.add`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdd?: (ctx: AddContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.sub`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSub?: (ctx: SubContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.inc`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInc?: (ctx: IncContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.preIncrementExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.dec`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDec?: (ctx: DecContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.preDecrementExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.tilde`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTilde?: (ctx: TildeContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.bang`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBang?: (ctx: BangContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.unaryExpressionNotPlusMinus`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.postfixExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.postIncrementExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.postIncrementExpression_lf_postfixExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostIncrementExpression_lf_postfixExpression?: (
    ctx: PostIncrementExpression_lf_postfixExpressionContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.postDecrementExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.postDecrementExpression_lf_postfixExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostDecrementExpression_lf_postfixExpression?: (
    ctx: PostDecrementExpression_lf_postfixExpressionContext,
  ) => Result;

  /**
   * Visit a parse tree produced by `Java8Parser.castExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCastExpression?: (ctx: CastExpressionContext) => Result;
}
