IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Categories] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(200) NULL,
    CONSTRAINT [PK_Categories] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [Goods] (
    [Id] int NOT NULL IDENTITY,
    [CategoryId] int NOT NULL,
    [Name] nvarchar(300) NULL,
    CONSTRAINT [PK_Goods] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Goods_Categories_CategoryId] FOREIGN KEY ([CategoryId]) REFERENCES [Categories] ([Id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_Goods_CategoryId] ON [Goods] ([CategoryId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20230210075121_InitialCreate', N'5.0.0');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

ALTER TABLE [Categories] ADD [ParentCategoryId] int NULL;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Name', N'ParentCategoryId') AND [object_id] = OBJECT_ID(N'[Categories]'))
    SET IDENTITY_INSERT [Categories] ON;
INSERT INTO [Categories] ([Id], [Name], [ParentCategoryId])
VALUES (1, N'Запасные части к комбайнам', NULL),
(2, N'Запасные части к тракторам', NULL),
(3, N'Запасные части к почвообрабатывающей технике', NULL),
(4, N'Запасные части к сеялкам', NULL),
(5, N'Запасные части к двигателям', NULL),
(6, N'ACROS-580', 1),
(7, N'ACROS-595', 1),
(8, N'МТЗ-1221', 2),
(9, N'К-700', 2),
(10, N'К-744', 2),
(11, N'Bellota', 3),
(12, N'РЗЗ', 3),
(13, N'СЗ-3,6', 4),
(14, N'МС-8', 4),
(15, N'Д-245', 5),
(16, N'ЯМЗ-236', 5),
(17, N'ЯМЗ-238', 5),
(18, N'Cummins', 5);
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'Name', N'ParentCategoryId') AND [object_id] = OBJECT_ID(N'[Categories]'))
    SET IDENTITY_INSERT [Categories] OFF;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20230224113243_UpdateCategoriesTable', N'5.0.0');
GO

COMMIT;
GO

